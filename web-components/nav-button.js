// web component
class NavButton extends HTMLElement {

    constructor() {
        super();
        this.text = 'Button';
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
        this.innerHTML = `<button>${this.text}</button>`;
    }

}

// register component
customElements.define('nav-button', NavButton);