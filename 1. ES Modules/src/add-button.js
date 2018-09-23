// Simply creates a button by making a div and adding the styles
export function addButton(text) {
    const btn = document.createElement('div');
    btn.className = 'btn';
    btn.textContent = text;
    return btn;
}