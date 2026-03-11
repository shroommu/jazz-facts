import "./nav-link.js";

class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }

  // connect component
  connectedCallback() {
    this.innerHTML = `
        <link rel="preload" as="image"
            href="./public/images/svg/music-notes.svg" />
        <header>
            <nav>
                <ul class="nav-item-list">
                    <li><nav-link text="Overview"></nav-link></li>
                    <li><nav-link text="History"></nav-link></li>
                    <li><nav-link text="Genres"></nav-link></li>
                    <li><nav-link text="Playlist"></nav-link></li>
                </ul>
            </nav>
        </header>
        <style>
            @import "./web-components/site-header.css";
        </style>
    `;
  }
}

// register component
customElements.define("site-header", SiteHeader);
