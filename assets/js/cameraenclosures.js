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