import styles from "./record-album.css?raw";

const heroImageUrl = "/images/avif/jazz-headliner.avif";

class RecordAlbum extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" })
    }

    // connect component
    connectedCallback() {
        this.shadow.innerHTML = `
        <style>${styles}</style>
        <link rel="preload" as="image" href="${heroImageUrl}" />
        <a class="album-cover-link" href="/playlist/index.html">
            <div class="album-cover">
                <img class="hero-image" src="${heroImageUrl}" loading="eager"
                    fetchpriority="high" />
                <div class="album-cover-title">Top Hits</div>
                <div class="album-cover-subtitle">From All The Greats</div>
                <svg class="animated-record" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 10 10" height="100%"
                    width="100%">
                    <circle cx="5" cy="5" r="5"></circle>
                </svg>
            </div>
        </a>
    `;
    }
}

// register component
customElements.define("record-album", RecordAlbum);
