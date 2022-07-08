document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')


    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-btn--active')
        menu.classList.toggle('menu--active')
    })

});