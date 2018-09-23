import { LitElement, html } from "@polymer/lit-element";

export class WCLoginForm extends LitElement {

    static get properties() {
        return {
            email: {type: String},
            password: {type: String},
        };
    }
    constructor() {
        super();
        this.email = '';
        this.password = '';
    }
    _handleCancel() {
        this.email = '';
        this.password = '';
    }
    _handleLogin() {
        this.dispatchEvent(new CustomEvent('wc-login', {
            detail: {
                email: this.email,
                password: this.password,
            }
        }))
    }
    render() {
        return html`
        <style>
        .login-form {
            padding: 12px;
            display: flex;
            flex-direction: column;
            box-shadow: 1px 2px 5px 0px black;
            border-radius: 3px;
        }
        .form-field {
            margin: 5px;
        }
        .login-btn {
            margin: 5px;
        }
        .cancel-btn {
            margin: 5px;
            --wc-button-color: #ABABAB;
        }
        </style>
        <div class="login-form">
            <div class="form-field">
                <div class="label">Email</div>
                <wc-input 
                    @wc-change="${(e) => this.email = e.detail.value}"
                    .value="${this.email}"
                    placeholder="name@example.com"></wc-input>
            </div>
            <div class="form-field">
                <div class="label">Password</div>
                <wc-input 
                    @wc-change="${(e) => this.password = e.detail.value}"
                    .value="${this.password}"
                    placeholder="12345678"></wc-input>
            </div>
            <wc-button 
                @click="${() => this._handleLogin()}" class="login-btn">Login</wc-button>
            <wc-button 
                @click="${() => this._handleCancel()}" class="cancel-btn">Cancel</wc-button>
        </div>
        `;
    }
}
customElements.define('wc-login-form', WCLoginForm);