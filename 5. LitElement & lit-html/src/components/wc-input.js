// Browsers don't support improting modules by name (yet),
// they only support URLs. This is the reason we're using
// Polymer CLI here, which does one job for us: converting
// module name to URL that browser can understands.
// There's really no extra build step required, you just refresh
// the browser, and there you have it, it just works
import { LitElement, html } from '@polymer/lit-element';

// So here we're building our own Input element
// using this new LitElement base class, which
// extends HTMLElement, and gives us some cool features
// like reactive programming thanks to change detection
// of the properties, and also efficient template creation
// and updating thanks to lit-html library which comes with
// LitElement. That way we have Framework-like features,
// Just by adding a 6kB library, and no extra workflow.
export class WCInput extends LitElement {

    static get properties() {
        return {
            placeholder: {type: String},
            value: {type: String}
        };
    }

    constructor() {
        super();
        this.placeholder = '';
        this.value = '';
    }

    handleChange(event) {
        this.dispatchEvent(new CustomEvent('wc-change', {
            detail: {value: event.target.value}
        }))
    }

    // This render method might look familiar to you from react
    render() {
        return html`
        <style>
            :host {
                display: flex;
                flex-direction: column;
            }
            input {
                border: none;
                background-color: #F3F3F3;
                border-radius: 4px;
                outline: none;
                padding: 8px 12px;
            }
        </style>
        <input value="${this.value}" 
            @change="${(e) => this.handleChange(e)}" 
            placeholder="${this.placeholder}">
        `;
    }
}
customElements.define('wc-input', WCInput);