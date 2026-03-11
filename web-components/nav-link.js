class NavLink extends HTMLElement {
    constructor() {
        super();
        this.text = "Nav Link";
        this.splotchcolor = "black";
        this.shadow = this.attachShadow({ mode: "open" });
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
                .nav-link-container {
                    position: relative;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                }
                .nav-link-container:hover .music-notes {
                    opacity: 1;
                }
                .nav-link {
                    font-family: "Limelight";
                    font-size: x-large;
                    z-index: 10;
                }
                @media (max-width: 800px) {
                    .nav-link {
                        font-size: medium;
                    }
                }
                .music-notes {
                    opacity: 0;
                    position: absolute;
                    height: 100px;
                    width: 150px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 0;
                }
                .note-1 {
                    scale: 200%;
                    rotate: -20deg;
                    translate: 40px 230px;
                    transform-box: fill-box;
                }
                .note-2 {
                    scale: 200%;
                    rotate: 30deg;
                    translate: -350px -280px;
                    transform-box: fill-box;
                }
                .note-3 {
                    scale: 200%;
                    rotate: 30deg;
                    translate: 460px -190px;
                    transform-box: fill-box;
                }
                @media (max-width: 800px) {
                    .music-notes {
                        height: 75px;
                        width: 112.5px;
                    }
                }
            </style>
        `;
    }
}

// register component
customElements.define("nav-link", NavLink);
