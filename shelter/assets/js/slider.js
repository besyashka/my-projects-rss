const sliderLine = document.querySelector('.slider_line');
let position = 0;

const getSliderGap = () => {
  if (window.innerWidth < 1201) {
    return 40;
  } else {
    return 90;
  }
};

let gap = getSliderGap();

export const handleClickButtonSliderNext = () => {
  document.querySelector('.slider_control_next').addEventListener('click', () => {
    position += 270 + gap;

    if (position > 1980) {
      position = 0;
    }

    sliderLine.style.transform = `translateX(${-position}px)`;
  });
};

export const handleClickButtonPrev = () => {
  document.querySelector('.slider_control_prev').addEventListener('click', () => {
    position -= 270 + gap;

    if (position < 0) {
      position = 1890 - gap;
    }

    sliderLine.style.transform = `translateX(${-position}px)`;
  });
};

window.addEventListener('resize', () => {
  gap = getSliderGap();
  sliderLine.style.transform = `translateX(0px)`;
});