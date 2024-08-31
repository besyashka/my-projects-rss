import { toggleOverlay } from './overlay.js';

export const openModalWindow = (cardsArray) => {
  document.querySelector('.slider_container').addEventListener('click', (e) => {
    const clickedSlide = e.target.closest('.slide');
    const namePet = clickedSlide.querySelector('.our_friends_text');

    if (clickedSlide) {
      cardsArray.forEach((item)=> {
        if (item.name === `${namePet.textContent}`) { 
          item.generatePetsCardForModal();
        }
      });

      document.querySelector('.overlay').style.zIndex = '1';
      document.body.style.overflow = 'hidden';
      toggleOverlay('add');

      document.addEventListener('click', closeModalWindow);
    }
  });
}

const closeModalWindow = (e) => {
  const modalWindow = document.querySelector('.modal_container');
  const sliderContainer = document.querySelector('.slider_container');
  const clickedModalWindow = e.composedPath().includes(modalWindow);
  const clickedSlider = e.composedPath().includes(sliderContainer);

  if(modalWindow && !clickedModalWindow && !clickedSlider) {
    toggleOverlay('remove');
    document.body.style.overflow = '';
    document.querySelector('.modal_window').remove();
    document.querySelector('.overlay').style.zIndex = '0';
    document.removeEventListener('click', closeModalWindow);
  }
}