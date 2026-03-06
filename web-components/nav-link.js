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
                <div class="paint-splotch-${this.text}"></div>
            </div>
            <style>
                .nav-link-container {
                    position: relative;
                    height: 100px;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                }
                .nav-link-container:hover .paint-splotch-${this.text} {
                    opacity: 1;
                }
                .nav-link {
                    font-family: "Limelight";
                    font-size: x-large;
                    z-index: 10;
                }
                .paint-splotch-${this.text} {
                    opacity: 0;
                    position: absolute;
                    background-color: ${this.splotchcolor};
                    height: 100px;
                    width: 100px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 0;
                    mask: url('./public/paint-splotch-100px.png'), radial-gradient(circle at center, transparent 0%, black 100%); 
                    mask-size: contain;
                    mask-composite: subtract;
                }
            </style>
        `;
    }
}

// register component
customElements.define("nav-link", NavLink);
