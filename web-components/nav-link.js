class NavLink extends HTMLElement {

    constructor() {
        super();
        this.text = 'Link';
    }

    // component attributes
    static get observedAttributes() {
        return ['text'];
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {

        if (oldValue === newValue) return;
        this[property] = newValue;

    }

    // connect component
    connectedCallback() {
        this.innerHTML = `
        <a>
            ${this.text}
        </a>
        <style>
            a {
                line-height: 0;
            }            
            a:hover {
                font-size: large;
                line-height: 0;
            }
      </style>`;
    }

}

// register component
customElements.define('nav-link', NavLink);