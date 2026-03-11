class NavLink extends HTMLElement {
  constructor() {
    super();
    this.text = "Nav Link";
    this.shadow = this.attachShadow({ mode: "open" });
  }

  // component attributes
  static get observedAttributes() {
    return ["text"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    this.shadow.innerHTML = `
        <div class="nav-link-container">
            <a class="nav-link">${this.text}</a>
            <svg class="music-notes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 841.9">
                <use href="./public/images/svg/music-notes.svg#eighth-note" class="note-1"/>
                <use href="./public/images/svg/music-notes.svg#quarter-note" class="note-2"/>
                <use href="./public/images/svg/music-notes.svg#double-eighth-note" class="note-3"/>
            </svg>
        </div>
        <style>
            @import "./web-components/nav-link.css";
        </style>
    `;
  }
}

// register component
customElements.define("nav-link", NavLink);
