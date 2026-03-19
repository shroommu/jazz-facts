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

    async fetchSpotifyData() {
        try {
            console.log("trying");
            let res = await fetch("/api/spotify/playlist")
            if (!res.ok) {
                throw new Error(`API Error: ${res.status}`)
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

