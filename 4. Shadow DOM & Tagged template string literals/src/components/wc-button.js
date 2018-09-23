// Here we'll refactor the code to create the template with javascript
// rather than having to rely on some template from index.html
// and also we'll use the Shadow DOM so we have the inner part fully protected
// from the outside and vise versa. This means we'll also move the styles
// into the template, because Shadow DOM will protect the inner div from being styled
// by global CSS. This way we'll have a truly modularized and reusable Web Component
// The rest is the same

const html = String.raw;
const btnTemplate = document.createElement('template');

// You could just do btnTemplate.innerHTML = ` <div .....;
// But this way some editors will give us nice
// autocompletion and syntax highlighting for html inside javascript
// These are called tagged template string literals
// and are made popular by the lit-html library that we'll use later on 
// to reduce most of this boilerplate here.
// On VSCode, install the lit-html plugin, and you'll have nice language support :-)
btnTemplate.innerHTML = html`
    <style>
        .btn {
            padding: 6px 12px;
            user-select: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #D14424;
            color: white;
            border-radius: 3px;
            outline: none;
            font-size: 21px;
            transition: opacity 0.2s;
        }
        .btn:active {
            opacity: 0.5;;
        }
    </style>
    <div class="btn">-Placeholder text-</div>
`;

// Every Custom Element should be a class extending HTMLElement
export class WCButton extends HTMLElement {

    // Creating some basic API to work with from outside
    set text(val) {
        this.setAttribute('text', val);
        this.textDiv.textContent = val;
    }

    get text() {
        return this.getAttribute('text');
    }

    // This tells the browser to observe
    // changes in the attribute names specified
    // so the attributeChangedCallback can fire
    // Whenever they change
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
        // The constructor is the right place to
        // instantiate a tree of nodes from a template
        // for our custom element. super(); is a requirement here
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(btnTemplate.content.cloneNode(true));
        this.textDiv = this.shadowRoot.querySelector('.btn');
    }
}

// In order to fully create our own reusable custom element
// with a tag and everything we're telling the browser: 
// "Hey, please associate this tag-name with the class
// I've just created for this custom element"
customElements.define('wc-button', WCButton);