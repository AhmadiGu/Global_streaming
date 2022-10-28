const mobileMenu = document.querySelector('.icon');
const menuHeader = document.querySelector('.header');
const menu = document.querySelector('.main-menu-ul');
const toggleMenu = () => {
  menuHeader.classList.toggle('active');
};
mobileMenu.addEventListener('click', () => toggleMenu());
const displayNone = () => {
  menuHeader.classList.remove('active');
};
menu.addEventListener('click', () => displayNone());