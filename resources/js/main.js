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
const blurHeader = () => {
  const header = document.getElementById('header')
  // add blur-header selector if the bottom offset is greater than 50px of the viewport
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_yzqwk2k','template_giuiwtc','#contact-form','RTrRreWy73Cjzl8Z5')
        .then(() => {
          // Show sent message
          contactMessage.textContent = 'Message sent successfully ✅'

          // Remove message after five seconds
          setTimeout(() => {
            contactMessage.textContent = ''
          }, 5000)

          // Clear input fields
          contactForm.reset()

        }, () => {
          // Show error message
          contactMessage.textContent = 'Message not sent (service error) ❌' //khi sai số serviceID
        })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 90,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
// scrollrevealjs.org -> GitHub -> dist -> scrollreveal.min.js -> Raw -> Ctrl+S
const scr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 300,
  // reset: true // Animations repeat
})

scr.reveal(`.home__data, .experience, .skills, .contact__container`)
scr.reveal(`.home__img`, {delay: 400})
scr.reveal(`.home__scroll`, {delay: 600})
scr.reveal(`.work__card, .services__card`, {interval: 100})
scr.reveal(`.about__content`, {origin: 'right'})
scr.reveal(`.about__img`, {origin: 'left'})
