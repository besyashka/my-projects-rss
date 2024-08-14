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
};

const closeBurgerMenu = () => { 
  burgerButton.classList.remove('burger_open');
  nav.classList.remove('active');
  document.body.style.overflow = '';
};

const handleClickNavigation = () => {
  document.querySelectorAll('.navigation_link').forEach((link) => {
    link.addEventListener('click', () => {
      closeBurgerMenu();
    });
  })
};

handleClickNavigation();