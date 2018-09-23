// Here we'll refactor the code into a Custom Element

const btnTemplate = document.querySelector('#btn_template');

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

        this.appendChild(btnTemplate.content.cloneNode(true));
        this.textDiv = this.querySelector('.btn');
    }
}

// In order to fully create our own reusable custom element
// with a tag and everything we're telling the browser: 
// "Hey, please associate this tag-name with the class
// I've just created for this custom element"
customElements.define('wc-button', WCButton);