/* eslint-disable no-magic-numbers */
for (const li of tree.querySelectorAll('li')) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}
tree.onclick = function(event) {
    if (event.target.tagName !== 'SPAN') {
        return;
    }
    const childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
}