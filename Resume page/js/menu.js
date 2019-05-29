/* Toggle menu collapse */

const menu = document.querySelector('.collapsible');

function toggleCollapse() {
    menu.classList.contains('show') ? menu.classList.remove('show') : menu.classList.add('show');
}
