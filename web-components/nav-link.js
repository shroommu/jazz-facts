class NavLink extends HTMLElement {
    constructor() {
        super();
        this.text = "Nav Link";
        this.splotchcolor = "black";
    }

    // component attributes
    static get observedAttributes() {
        return ["text", "splotchcolor"];
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    // connect component
    connectedCallback() {
        this.innerHTML = `
            <div class="nav-link-container">
                <a class="nav-link">${this.text}</a>
                <div class="paint-splotch-${this.text}" />
            </div>
            <style>
                .nav-link-container {
                    position: relative;
                }
                .nav-link-container:hover .paint-splotch-${this.text} {
                    display: block;
                }
                .nav-link-container:hover .nav-link {
                    font-size: large;
                    line-height: 0;
                }
                .nav-link {
                    line-height: 0;
                    z-index: 10;
                }
                .paint-splotch-${this.text} {
                    display: none;
                    position: absolute;
                    background-color: ${this.splotchcolor};
                    height: 100px;
                    width: 100px;
                    top: -35px;
                    left: -15px;
                    z-index: 0;
                    mask: url('./public/paint-splotch.png'), radial-gradient(circle at center, transparent 0%, black 100%); 
                    mask-size: contain;
                    mask-composite: subtract;
                }
            </style>
        `;
    }
}

// register component
customElements.define("nav-link", NavLink);
