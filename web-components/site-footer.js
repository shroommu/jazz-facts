import sheet from './site-footer.css' with { type: 'css' };

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
    this.shadow.adoptedStyleSheets = [sheet]
  }

  connectedCallback() {
    this.shadow.innerHTML = `
        <footer>
        </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
