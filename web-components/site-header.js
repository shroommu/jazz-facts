import "./nav-link.js";
import styles from "./site-header.css?raw";

const musicNotesSpriteUrl = "/images/svg/music-notes.svg";
const homePageUrl = "/";
const historyPageUrl = "/history/";
const genresPageUrl = "/genres/";
const playlistPageUrl = "/playlist/";

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }

  // connect component
  connectedCallback() {
    this.shadow.innerHTML = `
        <style>${styles}</style>
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
