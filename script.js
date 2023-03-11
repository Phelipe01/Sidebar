"use strict"

const menu = document.querySelector('.botao_menu')

const nav_icons = document.querySelector('.barra')


menu.addEventListener('click', () => {

    nav_icons.classList.toggle('ative')
    
})