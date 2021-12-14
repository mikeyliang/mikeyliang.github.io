/*==================== SOCIAL ICON SHOW ====================*/

/*===== DISABLE ZOOM =====*/
/* Validate if constant exists */


/* window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)) {
        e.preventDefault();
    }
}, false); */

window.onload = function () {
    document.body.scrollIntoView(true);
    return;
}

/*===== SCROLL SECTION =====*/
/* Changes number of which section scroll is in */


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


/*==================== PORTFOLIO  ====================*/

const overlay=document.getElementById('cuauvhover')
const ponddepthoverlay=document.getElementById('ponddepthoverlay')
const badmintonoverlay=document.getElementById('badmintonoverlay')

const cuauvhover=document.getElementById('cuauvhoverimg')
const cuauvlogo=document.getElementById('cuauvlogo')
const portfolionumber1=document.getElementById('portfolionumber1')

const ponddepthhover=document.getElementById('ponddepthhoverimg')
const ponddepthlogo=document.getElementById('ponddepthlogo')
const portfolionumber2=document.getElementById('portfolionumber2')

const badmintonplushhover=document.getElementById('badmintonplushoverimg')
const badmintonhover=document.getElementById('badmintonlogooverimg')
const badmintonlogo=document.getElementById('cornellbadminton')
const portfolionumber3=document.getElementById('portfolionumber3')

const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');

overlay.addEventListener("mouseenter", () => {
    cuauvhover.style.transition = "all 0.4s"
    cuauvhover.style.opacity = "1"
    portfolionumber1.style.opacity = "1"

    if (document.body.classList.contains(darkTheme)) {
        one.src="assets/img/num/01white.png"
    } else {
        one.src="assets/img/num/01.png"
    }

    setTimeout(function(){
        cuauvhover.style.transition = "all 0.2s"
        cuauvlogo.style.opacity ="1"
    }, 100); 

    
})

overlay.addEventListener("mouseleave", () => {
    cuauvhover.style.transition = "all 0.4s"
    cuauvhover.style.opacity = "0"
    cuauvlogo.style.opacity = "0"
    portfolionumber1.style.opacity = "0"
})

ponddepthoverlay.addEventListener("mouseenter", () => {
    ponddepthhover.style.transition = "all 0.4s"
    ponddepthhover.style.opacity = "1"
    portfolionumber2.style.opacity = "1"

    if (document.body.classList.contains(darkTheme)) {
        two.src="assets/img/num/02white.png"
    } else {
        two.src="assets/img/num/02.png"
    }

    setTimeout(function(){
        ponddepthhover.style.transition = "all 0.2s"
        ponddepthlogo.style.opacity ="1"
    }, 100); 

})

ponddepthoverlay.addEventListener("mouseleave", () => {
    ponddepthhover.style.transition = "all 0.4s"
    ponddepthhover.style.opacity = "0"
    ponddepthlogo.style.opacity = "0"
    portfolionumber2.style.opacity = "0"
})

badmintonoverlay.addEventListener("mouseenter", () => {
    badmintonplushhover.style.transition = "all 0.4s"
    badmintonplushhover.style.opacity = "1"
    badmintonhover.style.transition = "all 0.4s"
    badmintonhover.style.opacity = "1"
    portfolionumber3.style.opacity = "1"

    if (document.body.classList.contains(darkTheme)) {
        three.src="assets/img/num/03white.png"
    } else {
        three.src="assets/img/num/03.png"
    }

    setTimeout(function(){
        badmintonhover.style.transition = "all 0.2s"
        badmintonplushhover.style.transition = "all 0.2s"
        badmintonlogo.style.opacity ="1"
    }, 100); 

})

badmintonoverlay.addEventListener("mouseleave", () => {
    badmintonplushhover.style.transition = "all 0.4s"
    badmintonplushhover.style.opacity = "0"
    badmintonhover.style.transition = "all 0.4s"
    badmintonhover.style.opacity = "0"
    badmintonlogo.style.opacity = "0"
    portfolionumber3.style.opacity = "0"
})



/*==================== DARK LIGHT THEME ====================*/

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const lighticonTheme = 'uil-sunset'
const darkiconTheme = 'uil-wind-moon'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const logo=document.getElementById('logo')


if (selectedTheme) {
    if (selectedIcon == darkiconTheme) {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.replace(darkiconTheme, lighticonTheme)
        logo.src = "assets/img/mlwhite.png"
    }
}

themeButton.addEventListener('click', () => {
    if (document.body.classList.contains(darkTheme)) {
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', 'light')
        localStorage.setItem('selected-icon', lighticonTheme)
        logo.src = "assets/img/ml.png"
    } else {
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', 'dark')
        localStorage.setItem('selected-icon', darkiconTheme)

        logo.src = "assets/img/mlwhite.png"
    }
    themeButton.classList.toggle(darkiconTheme)
    themeButton.classList.toggle(lighticonTheme)

    
})





