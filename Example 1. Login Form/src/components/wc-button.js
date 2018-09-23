const html = String.raw;
const btnTemplate = document.createElement('template');
btnTemplate.innerHTML = html`
    <style>
        .btn {
            padding: 6px 12px;
            user-select: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 3px;
            outline: none;
            font-size: 21px;
            transition: opacity 0.2s;
            background-color: var(--wc-button-color, #D14424);
        }
        .btn:active {
            opacity: 0.5;;
        }
    </style>
    <div class="btn"><slot></slot</div>
`;

export class WCButton extends HTMLElement {
    set text(val) {
        this.setAttribute('text', val);
        this.textDiv.textContent = val;
    }

    get text() {
        return this.getAttribute('text');
    }
    static get observedAttributes() {
        return ['text'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch(name) {
            case 'text': 
                this.textDiv.textContent = newVal;
            default: 
                return;
        }
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(btnTemplate.content.cloneNode(true));
        this.textDiv = this.shadowRoot.querySelector('.btn');
    }
}
customElements.define('wc-button', WCButton);