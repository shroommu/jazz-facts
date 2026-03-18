import styles from "./site-footer.css?raw";

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" })
  }

  connectedCallback() {
    this.shadow.innerHTML = `
        <style>${styles}</style>
        <footer>
        </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
