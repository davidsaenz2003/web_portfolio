
const aboutMeButton = document.querySelector(".aboutMe")
const contactButton = document.querySelector(".myContact")
const aboutMePosition = document.querySelector("#about-mee")
const lastClassPosition = document.querySelector(".contact_me")
const whatsLink = document.querySelector(".whatsapp")
const linkePage = document.querySelector(".linkedin")
const instaLInk = document.querySelector(".instagram")
const gmailMe = document.querySelector(".gmail")

// GET ELEMENTS FOR EVENTS

aboutMeButton.addEventListener("click", eventButton)

function eventButton() {
    const rect = aboutMePosition.getBoundingClientRect();
    scroll({
        top: rect.y - 60,
        behavior: 'smooth'
      })
}

contactButton.addEventListener("click", eventButtonForContact)

function eventButtonForContact() {

    const rectangularPosition = lastClassPosition.getBoundingClientRect();

    scroll({
        top: rectangularPosition.y,
        behavior: 'smooth'
      })
}

// FUNCTION TO REDIRECT TO SOCIAL MEDIA LINKS

whatsLink.addEventListener("click", () => {
    window.open("https://wa.me/573043038866")
})

linkePage.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/david-saenz-var%C3%B3n-88b863250/")
})

instaLInk.addEventListener("click", () => {
    window.open("https://www.instagram.com/hdsenkk/")
})


gmailMe.addEventListener("click", () => {
    window.open("./request_sources/request.html")
})

