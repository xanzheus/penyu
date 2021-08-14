var gambar = document.querySelectorAll(".panel")
gambar.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClassActive()
        panel.classList.toggle('active')
    })
})

function removeClassActive() {
    gambar.forEach((panel) => {
        panel.classList.remove('active')
    })
}

var burgerMenu = document.querySelector('.burger-menu')
var nav = document.querySelector('nav')
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('rotate')
    if (burgerMenu == document.getElementsByClassName('rotate')[0]) {
        nav.classList.add('stinky')
    } else {

        removeClassStinky()
    }

})
function removeClassStinky() {
    nav.classList.remove('stinky')
}

// Smooth scroll
var navigasi = document.querySelectorAll('.sx')
var link = document.querySelectorAll('a')
var artikel = document.querySelectorAll('article')

window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolller', window.scrollY > 0)
})