/*==============Menu Show Y Hidden ================= */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*=========Menu Show=========*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*=========Menu Hidden=========*/
/*validate if constant exit*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

/*====== DOM Details  =======*/

console.log('Length of SkillsContent is = ' + skillsContent.length);
console.log('skills__header parentNode is ' + document.querySelectorAll('.skills__header')[0]);
console.log('Skills 1 Condition ' + skillsContent[0].className);
console.log('Skills 2 Condition ' + skillsContent[1].className);
console.log('Skills 3 Condition ' + skillsContent[2].className);



function toggleSkills() {
    let itemsClass = this.parentNode.className;
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemsClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills);
});