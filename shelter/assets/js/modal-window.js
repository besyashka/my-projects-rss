import { toggleOverlay } from './overlay.js';

const sliderContainer = document.querySelector('.slider_container');
const friendContainer = document.querySelector('.friends_list');

export const openModalWindow = (cardsArray) => {
  if (friendContainer !== null) {
    friendContainer.addEventListener('click', (e) => {
      const clickedFriendsItem = e.target.closest('.friends_item');
      handleClickItem(clickedFriendsItem, cardsArray);
    });
  } else if (sliderContainer !== null) {
    sliderContainer.addEventListener('click', (e) => {
      const clickedSliderItem = e.target.closest('.slide');
      handleClickItem(clickedSliderItem, cardsArray);
    });
  }
}

const closeModalWindow = (e) => {
  const modalWindow = document.querySelector('.modal_container');
  const clickedModalWindow = e.composedPath().includes(modalWindow);
  const clickedSlider = e.composedPath().includes(sliderContainer);
  const clickedFriendContainer = e.composedPath().includes(friendContainer);

  if (modalWindow && !clickedModalWindow && !clickedSlider && !clickedFriendContainer) {
    toggleOverlay('remove');
    document.body.style.overflow = '';
    document.querySelector('.modal_window').remove();
    document.querySelector('.overlay').style.zIndex = '0';
    document.removeEventListener('click', closeModalWindow);
  }
}

const handleClickItem = (clickedItem, cardsArray) => {
  if (clickedItem) {
    generateModalWindow(cardsArray, clickedItem);
    toggleOverlay('add');
    
    document.querySelector('.overlay').style.zIndex = '1';
    document.body.style.overflow = 'hidden';
    document.addEventListener('click', closeModalWindow);
  }
}

const generateModalWindow = (cardsArray, clickedItem) => {
  const namePet = clickedItem.querySelector('.our_friends_text');
  cardsArray.forEach((item)=> {
    if (item.name === `${namePet.textContent}`) { 
      item.generatePetsCardForModal();
    }
  });
}