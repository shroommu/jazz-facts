import "./nav-link.js";
import sheet from './site-header.css' with { type: 'css' };

const musicNotesSpriteUrl = new URL(
  "../public/images/svg/music-notes.svg",
  import.meta.url,
).href;
const homePageUrl = new URL("../index.html", import.meta.url).href;
const historyPageUrl = new URL("../history/index.html", import.meta.url).href;
const genresPageUrl = new URL("../genres/index.html", import.meta.url).href;
const playlistPageUrl = new URL("../playlist/index.html", import.meta.url).href;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
    this.shadow.adoptedStyleSheets = [sheet]
  }

  // connect component
  connectedCallback() {
    this.shadow.innerHTML = `
        <link rel="preload" as="image"
        href="${musicNotesSpriteUrl}" />
        <header>
        <a class="site-title" href="${homePageUrl}">Jazz Facts</a>
            <nav>
                <ul class="nav-item-list">
            <li><nav-link text="History" href="${historyPageUrl}"></nav-link></li>
            <li><nav-link text="Genres" href="${genresPageUrl}"></nav-link></li>
            <li><nav-link text="Playlist" href="${playlistPageUrl}"></nav-link></li>
                </ul>
            </nav>
        </header>
    `;
  }
}

// register component
customElements.define("site-header", SiteHeader);
