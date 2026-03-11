class NavLink extends HTMLElement {
  constructor() {
    super();
    this.text = "Nav Link";
    this.href = null;
    this.shadow = this.attachShadow({ mode: "open" });
  }

  // component attributes
  static get observedAttributes() {
    return ["text", "href"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    const musicNotesSpriteUrl = new URL(
      "../public/images/svg/music-notes.svg",
      import.meta.url
    ).href;
    const navLinkCssUrl = new URL("./nav-link.css", import.meta.url).href;

    this.shadow.innerHTML = `
        <div class="nav-link-container">
            <a class="nav-link" href="${this.href}">${this.text}</a>
            <svg class="music-notes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 841.9">
                <use href="${musicNotesSpriteUrl}#eighth-note" class="note-1"/>
                <use href="${musicNotesSpriteUrl}#quarter-note" class="note-2"/>
                <use href="${musicNotesSpriteUrl}#double-eighth-note" class="note-3"/>
            </svg>
        </div>
        <style>
            @import "${navLinkCssUrl}";
        </style>
    `;
  }
}

// register component
customElements.define("nav-link", NavLink);
