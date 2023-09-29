const nav_toggle = document.querySelector('#nav-menu');
const nav_mobile_toggle = document.getElementById('nav-mobile-menu');
const navbar = document.querySelector('#navbar');

const showItems = () => {
    navbar.classList.toggle('show-items');
}

nav_toggle.addEventListener('click', showItems)

nav_mobile_toggle.addEventListener('click', showItems);
