const sliderLine = document.querySelector('.slider_line');

export const getArrayCards = (cardsArray) => {
  shuffleArrayCards(cardsArray);
};

const cleanSlider = () => {
  sliderLine.innerHTML = '';
}

const shuffleArrayCards = (cardsArray) => { 
  const cardsArrayLength = cardsArray.length;
  
  for (let i = cardsArrayLength - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1)); 
    [cardsArray[i], cardsArray[random]] = [cardsArray[random], cardsArray[i]];
  }

  generateRandomSlide(cardsArray);
};