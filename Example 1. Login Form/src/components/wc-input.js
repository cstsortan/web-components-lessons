import { LitElement, html } from '@polymer/lit-element';

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
        <input .value="${this.value}" 
            @change="${(e) => this.handleChange(e)}" 
            placeholder="${this.placeholder}">
        `;
    }
}
customElements.define('wc-input', WCInput);