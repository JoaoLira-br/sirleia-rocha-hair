// This script is used to navigate between pages in the Makeup website.
// rotatingShape is the rotating shape in the header.
const rotatingShape = document.querySelector(".header .rotating");
// up arrow is the up arrow in the header inside the rotating shape.
const upArrow = document.querySelector(".header .xcon-angle-up");
const navListItems = document.querySelectorAll(
  ".header .makeup_fl_nav_list ul li"
);
const pageContent = document.querySelector(".makeup_fl_content_in_qq");
let currentPageListItem = null;
const navMap = {
  index: navListItems[0],
  about: navListItems[1],
  services: navListItems[2],
  service_single: navListItems[2],
  gallery: navListItems[3],
  blog: navListItems[4],
  blog_single: navListItems[4],
  contact: navListItems[5],
};



const urlPath = window.location.pathname;

let lastSegment = urlPath.substring(urlPath.lastIndexOf("/") + 1);
lastSegment = lastSegment.slice(0, lastSegment.indexOf("."));

currentPageListItem = navMap[lastSegment];

if (!currentPageListItem) {
    window.location.href = "index.html";
}

// Initial update
updatePosition();

// Update position on window resize
window.addEventListener("resize", updatePosition);

// Update position on scroll
window.addEventListener("scroll", updatePosition);


function updatePosition() {
    const currentPageRect = currentPageListItem.getBoundingClientRect();
    const pageWidth = document.documentElement.clientWidth;
    const currentPageCenterX = currentPageRect.left + currentPageRect.width / 2;
    const xRatio = (currentPageCenterX / pageWidth) * 100;

    console.log(
        `Current page center X: ${currentPageCenterX}, Page width: ${pageWidth}, X ratio: ${xRatio}%`
    );
    rotatingShape.style.left = `${xRatio}%`;
    upArrow.style.left = `${xRatio}%`;
}
// function displayNotFound(){
//     pageContent.innerHTML = "<div><h1>Não encontramos esta página</h1><h2>Retroceda a pagina inicial e recomeça.</h2><h3> <a href=\"index.html\"> </a> </h3></div>";

// }


