const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const listHome = document.querySelector('.list-home')
const listMe = document.querySelector('.list-me')
const listTechno = document.querySelector('.list-techno')
const listProject = document.querySelector('.list-project')
const listContact = document.querySelector('.list-contact')
const headerHome = document.querySelector('.main__header--home');
const headerMe = document.querySelector('.main__header--me');
const headerTechno = document.querySelector('.main__header--techno')
const headerProject = document.querySelector('.main__header--project')
const headerContact = document.querySelector('.main__header--contact')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    document.body.classList.toggle('active')
})

listHome.addEventListener('click', () => {
    headerHome.scrollIntoView({ behavior: 'smooth', })
})
listMe.addEventListener('click', () => {
    headerMe.scrollIntoView({ behavior: 'smooth', });
})
listTechno.addEventListener('click', () => {
    headerTechno.scrollIntoView({ behavior: 'smooth', });
})
listProject.addEventListener('click', () => {
    headerProject.scrollIntoView({ behavior: 'smooth', });
})
listContact.addEventListener('click', () => {
    headerContact.scrollIntoView({ behavior: 'smooth', });
})