const sliderLine = document.querySelector('.slider_line');

export const getArrayCards = (cardsArray) => {
  if (sliderLine) {
    shuffleArrayCards(cardsArray);
  }
};

const cleanSlider = () => {
  sliderLine.innerHTML = '';
}

const shuffleArrayCards = (slideArray) => { 
  const cardsArrayLength = slideArray.length;

  for (let i = cardsArrayLength - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1)); 
    [slideArray[i], slideArray[random]] = [slideArray[random], slideArray[i]];
  }

  createNewSlider(slideArray);
};

let slideArrayCopy = [];

const createNewSlider = (slideArray) => {
  cleanSlider();
  let offset = 0;
  slideArrayCopy = slideArray.slice();

  slideArray.forEach((card) => {
    const cardGenerate = card.generateSlideCard();
    cardGenerate.style.left = `${offset * (270 + 90)}px`;
    sliderLine.appendChild(cardGenerate);
    offset++;
  });
}

const handleClickButtonSliderNext = () => {
  document.querySelector('.slider_control_next').addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
      slide.style.left = `${(index - 1) * (270 + 90)}px`;
    });
    
    if (slides.length <= 3) {
      shuffleArrayCards(slideArrayCopy);
    } else {
      setTimeout(() => {
        slides[0].remove();
      }, 1000);
    }
  });
}

if (document.querySelector('.slider_control_next') !== null) {
  handleClickButtonSliderNext();
}