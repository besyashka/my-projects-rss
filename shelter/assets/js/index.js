console.log('100 баллов');
import { handleClickBurger } from './burger.js';
import { Card } from './Card.js';
import { getArrayCards } from './slider.js';
import { openModalWindow } from './modal-window.js';

const fetchCard = () => {
  fetch ('./assets/pets.json')
  .then((response) => {
    return response.json();
  })
  .then((pets) => {
    let cardsArray = pets.map(({
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites
    }) =>
      new Card(name, img, type, breed, description, age, inoculations, diseases, parasites)
    );

    getArrayCards(cardsArray);
    openModalWindow(cardsArray);
  });
};

handleClickBurger();
fetchCard();