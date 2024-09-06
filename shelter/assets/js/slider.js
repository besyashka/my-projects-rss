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
    let numberOfSlides = checkWidth();

    slides.forEach((slide, index) => {
      slide.style.left = `${(index - numberOfSlides) * (270 + 90)}px`;
    });

    setTimeout(() => {
      for (let i = 0; i < numberOfSlides; i++) {
        slides[i].remove();
      }

      slides = document.querySelectorAll('.slide');

      if (slides.length <= 3) {
        shuffleArrayCards(slideArrayCopy);
      }
    }, 1000);
  });
}

const handleClickButtonPrev = () => {
  document.querySelector('.slider_control_prev').addEventListener('click', () => {
    let slides = document.querySelectorAll('.slide');
    let numberOfSlides = checkWidth();

    slides.forEach((slide, index) => {
      slide.style.left = `${(index + numberOfSlides) * (270 + 90)}px`;
    });

    setTimeout(() => {
      /* for (let i = 0; i < numberOfSlides; i++) {
        slides[i].remove();
      } */

      shuffleArrayCards(slideArrayCopy);
    }, 1000);
  });
}

const checkWidth = () => {
  let number = null;

  if (window.innerWidth < 708) {
    number = 1;
  } else if (window.innerWidth < 1201) {
    number = 2;
  } else {
    number = 3;
  }

  return number;
}

if (document.querySelector('.slider_control_next') !== null) {
  handleClickButtonSliderNext();
  handleClickButtonPrev();
  window.addEventListener('resize', checkWidth);
}