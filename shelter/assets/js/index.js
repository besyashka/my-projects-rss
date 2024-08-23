console.log('100 баллов');
import { handleClickBurger } from './burger.js';
import { Card } from './Card.js';

let cardsArray = [];

const fetchCard = () => {
  fetch ('./assets/pets.json')
  .then((response) => {
    return response.json();
  })
  .then((pets) => {
    cardsArray = pets.map(({
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

    getArrayCards(cardsArray)
  });
};

handleClickBurger();
fetchCard();