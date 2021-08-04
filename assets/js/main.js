/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementsByClassName('skills__content'),
    skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass=this.parentNode.className

    for(i=0; i<skillsContent.length; i++) {
        skillsContent[i].className='skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className='skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
    tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>  {
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const lighticonTheme = 'uil-sunset'
const darkiconTheme = 'uil-wind-moon'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


if (selectedTheme) {
    if (selectedIcon == darkiconTheme) {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.replace(darkiconTheme, lighticonTheme)
    }
}

themeButton.addEventListener('click', () => {
    if (document.body.classList.contains(darkTheme)) {
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', 'light')
        localStorage.setItem('selected-icon', lighticonTheme)
    } else {
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', 'dark')
        localStorage.setItem('selected-icon', darkiconTheme)
    }
    themeButton.classList.toggle(darkiconTheme)
    themeButton.classList.toggle(lighticonTheme)
})





