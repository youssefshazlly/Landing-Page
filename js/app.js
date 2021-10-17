/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/
const nav= document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBarBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    nav.innerHTML = navUI;


};

navBarBuilder();


 

// Add class 'active' to section when near top of viewport

const viewport = (section) => {
    return Math.floor(section.getBoundingClientRect().top);

};
// Scroll to anchor ID using scrollTO event
const removeSection = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addSection = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:SlateBlue;";
    };
};

/** 
 * End Main Functions
 * Begin Events
 * 
*/const sectionActivation = () => {
    sections.forEach(section => {
        const elementviewport = viewport(section);

        inviewport = () => elementviewport < 150 && elementviewport >= -150;

        removeSection(section);
        addSection(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);


// scroll

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();

// Build menu 

// Scroll to section on link click

// Set sections as active


