const PLAYLIST_ID = "4Kl1pwvkkjoTt8WMmSyb7q";

let cachedToken = null;
let tokenExpiresAt = 0;

async function getSpotifyAccessToken() {
    const now = Date.now();
    if (cachedToken && now < tokenExpiresAt) {
        return cachedToken;
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_SECRET");
    }

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
        }),
    });

    if (!tokenResponse.ok) {
        const body = await tokenResponse.text();
        throw new Error(`Token request failed (${tokenResponse.status}): ${body}`);
    }

    const tokenJson = await tokenResponse.json();
    const ttlMs = Math.max((tokenJson.expires_in - 60) * 1000, 1000);

    cachedToken = tokenJson.access_token;
    tokenExpiresAt = Date.now() + ttlMs;
    return cachedToken;
}

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const accessToken = await getSpotifyAccessToken();
        const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!playlistResponse.ok) {
            const body = await playlistResponse.text();
            throw new Error(`Playlist request failed (${playlistResponse.status}): ${body}`);
        }

        const playlistJson = await playlistResponse.json();

        return res.status(200).json(playlistJson);
    } catch (error) {
        return res.status(500).json({ error: String(error) });
    }
}
