import styles from "./play-list.css?raw";

class Playlist extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" });
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <style>${styles}</style>
            <div class="playlist-container"></div>
        `;

        this.fetchSpotifyData()
    }

    async fetchData() {
        try {
            let token = await fetch();
            let res = await fetch("https://api.spotify.com/v1/playlists/4Kl1pwvkkjoTt8WMmSyb7q", {
                headers: {
                    Authorization: 'Bearer ' + ''
                }
            })
            if (!res.ok) {
                throw new Error(`API Error: ${response.status}`)
            }
            this.spotifyData = await res.json()
            console.log(this.spotifyData)
        } catch (e) {
            this.error = e
        }
        this.fetching = false
    }
}

customElements.define("play-list", Playlist);

