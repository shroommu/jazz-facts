import "./nav-link.js";

const heroImageUrl = new URL(
    "../public/images/avif/jazz-headliner.avif",
    import.meta.url,
).href;
const recordAlbumCssUrl = new URL("./record-album.css", import.meta.url).href;

class RecordAlbum extends HTMLElement {
    constructor() {
        super();
    }

    // connect component
    connectedCallback() {
        this.innerHTML = `
        <link rel="preload" as="image"
        href="${heroImageUrl}" />
        <a class="album-cover-link" href="/playlist/index.html">
        <div class="album-cover">
            <img class="hero-image" src="/public/images/avif/jazz-headliner.avif" loading="eager"
                fetchpriority="high" />
            <div class="album-cover-title">Top Hits</div>
            <div class="album-cover-subtitle">From All The Greats</div>
            <svg class="animated-record" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 10 10" height="100%"
                width="100%">
                <circle cx="5" cy="5" r="5"></circle>
            </svg>
        </div>
    </a>
        <style>
        @import "${recordAlbumCssUrl}";
        </style>
    `;
    }
}

// register component
customElements.define("record-album", RecordAlbum);
