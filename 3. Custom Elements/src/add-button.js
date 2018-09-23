// Refactored addButton() to use our new custom element

// Importing our component, so the code is being executeds
import { WCButton } from './components/wc-button.js';

export function addButton(text) {
    const btn = new WCButton();
    btn.text = text;
    return btn;
}