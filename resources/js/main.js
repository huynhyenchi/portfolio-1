/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  //Then, navMenu var will pick element contains nav-menu class and turn off show-menu selector by 'remove' method of 'classList' property
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
//When I click on any nav__link, it will be implemented linkAction function
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR HEADER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
