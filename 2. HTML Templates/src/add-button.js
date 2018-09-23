// Here instead of creating the div element
// from scratch, we're getting a reference 
// to the template element, and we're instantiating.
// Browser engineers claim that it's the fastest
// way to generate DOM nodes on the web.
export function addButton(text) {
    const btnTemplate = document.querySelector('#btn_template');
    const btn = btnTemplate.content.cloneNode(true);
    btn.querySelector('.btn').textContent = text;
    return btn;
}