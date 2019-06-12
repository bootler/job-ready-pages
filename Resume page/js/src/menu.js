/* Menu.js - Control the behavior of the navigation menu */


const collapsible = document.querySelector('.collapsible');
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

//add collapse function to each of the links in the nav menu
window.onload = () => {
    links.forEach(link => link.addEventListener('click', collapse, false));

}

window.onscroll = () => {
    addHighlight();
}

//collapse the menu by clicking a navigation link within
function collapse() {
    collapsible.classList.remove("show");

}

//toggle the collapse menu with the nav bar button
function toggleCollapse() {
    collapsible.classList.contains('show') ? collapsible.classList.remove('show') : collapsible.classList.add('show');
}

//check if any part of the element is in the viewport by ruling out it being entirely above or below the viewport.
//(top element border below viewport bottom border or vice versa).
function isInViewport(elem) {
    const vh = window.innerHeight;
    const rect = elem.getBoundingClientRect();

    //give a little buffer room to offset the smooth scroll delay when using this to highlight a link
    const buffer = 50;

    return (rect.top < vh - buffer && rect.bottom > 0 + buffer);
}

//indicate to the user which section of the document they are browsing by highlighting the corresponding link in the menu
//since the viewport can be scrolled between two elements, the top most is highlighted until
//completely scrolled out of view.
function addHighlight() {
    let flag = false;
    sections.forEach(section => {
        let query = "a[href='#" + section.id + "']";
        let link = document.querySelector(query);
        link.classList.remove("highlighted");

        if (isInViewport(section) && !flag) {
            link.classList.add("highlighted");
            flag = true;
        }
    });
}