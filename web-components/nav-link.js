import styles from "./nav-link.css?raw";

class NavLink extends HTMLElement {
  constructor() {
    super();
    this.text = "Nav Link";
    this.href = null;
    this.shadow = this.attachShadow({ mode: "closed" });
  }

  static get observedAttributes() {
    return ["text", "href"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    const musicNotesSpriteUrl = "/images/svg/music-notes.svg";

    this.shadow.innerHTML = `
        <style>${styles}</style>
        <div class="nav-link-container">
            <a class="nav-link" href="${this.href}">${this.text}</a>
            <svg class="music-notes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 841.9">
                <use href="${musicNotesSpriteUrl}#eighth-note" class="note-1"/>
                <use href="${musicNotesSpriteUrl}#quarter-note" class="note-2"/>
                <use href="${musicNotesSpriteUrl}#double-eighth-note" class="note-3"/>
            </svg>
        </div>
    `;
  }
}

customElements.define("nav-link", NavLink);
