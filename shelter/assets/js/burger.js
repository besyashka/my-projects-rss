import { toggleOverlay } from './overlay.js';

const burgerButton = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

export const handleClickBurger = () => {
  burgerButton.addEventListener('click', () => {
     if (!burgerButton.classList.contains('burger_open')) {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });
};

const openBurgerMenu = () => {
  burgerButton.classList.add('burger_open');
  nav.classList.add('active');
  document.body.style.overflow = 'hidden';
  toggleOverlay('add');
};

const closeBurgerMenu = () => { 
  burgerButton.classList.remove('burger_open');
  nav.classList.remove('active');
  document.body.style.overflow = '';
  toggleOverlay('remove');
};

const handleClickNavigation = () => {
  document.querySelectorAll('.navigation_link').forEach((link) => {
    link.addEventListener('click', () => {
      closeBurgerMenu();
    });
  })
};

const handleClickBackground = () => {
  document.addEventListener('click', (e) => {
    const clickedNav = e.composedPath().includes(nav);
    const clickedButton = e.composedPath().includes(burgerButton);

    if (nav.classList.contains('active') && !clickedNav && !clickedButton) {
      closeBurgerMenu();
    }
  });
};

handleClickBackground();
handleClickNavigation();