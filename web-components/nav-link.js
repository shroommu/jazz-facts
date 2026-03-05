class NavLink extends HTMLElement {

    constructor() {
        super();
        this.text = 'Nav Link';
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
            <div class="nav-link-container">
                <a class="nav-link">${this.text}</a>
                <svg class="paint-splotch" xmlns="http://www.w3.org/2000/svg" height="75px" width="75px">
                    <rect height="75px" width="75px" />
                </svg>
            </div>
            <style>
                .nav-link-container {
                    position: relative;
                }
                .nav-link-container:hover .paint-splotch {
                    display: block;
                }
                .nav-link-container:hover .nav-link {
                    font-size: large;
                    line-height: 0;
                }
                .nav-link {
                    line-height: 0;
                }
                .paint-splotch {
                    display: none;
                    position: absolute;
                    top: -25px;
                    left: -5px;
                }
                .paint-splotch rect {
                    clip-path: url('./public/paint-splotch.svg#clip');
                }
            </style>
        `;
    }

}

// register component
customElements.define('nav-link', NavLink);