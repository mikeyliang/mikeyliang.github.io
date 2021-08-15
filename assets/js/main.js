/*==================== SOCIAL ICON SHOW ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


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

/*==================== TYPED EFFECT ====================*/



/* https://usefulangle.com/post/75/typing-effect-animation-javascript-css */

// List of sentences
var _CONTENT = [ 
	"Create",
    "Design",
    "Develop",
    "Innovate"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {


		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 200);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);



/*==================== PORTFOLIO  ====================*/

const overlay=document.getElementById('cuauvhover')
const ponddepthoverlay=document.getElementById('ponddepthoverlay')

const cuauvhover=document.getElementById('cuauvhoverimg')
const cuauvlogo=document.getElementById('cuauvlogo')
const portfolionumber1=document.getElementById('portfolionumber1')

const ponddepthhover=document.getElementById('ponddepthhoverimg')
const ponddepthlogo=document.getElementById('ponddepthlogo')
const portfolionumber2=document.getElementById('portfolionumber2')

const one=document.getElementById('one');
const two=document.getElementById('two');

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





