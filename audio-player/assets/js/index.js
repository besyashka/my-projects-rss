import { listMusic } from './list-music.js';
const buttonPLay = document.querySelector('.player_button-play');
const audioElement = new Audio();

let isPlay = false;
let index = 0;

const playAudio = () => {
  if (!isPlay) {
    audioElement.src = listMusic[index].audio;
    audioElement.currentTime = 0;
    isPlay = true;
    audioElement.play();
  } else {
    audioElement.pause();
    isPlay = false;
  }
}

const toggleIconPlay = () => {
  buttonPLay.addEventListener('click', () => {
    document.querySelector('.player_icon_play').classList.toggle('pause');
    playAudio();
  });
}

const switchNextTrack = () => {
  document.querySelector('.player_button_next').addEventListener('click', () => {
    if (index === listMusic.length - 1) {
      index = 0;
    } else {
      index++;
    }
    audioElement.src = listMusic[index].audio;
    audioElement.play();
    toggleImageInPlayer(index);
  });
}

const switchPrevTrack = () => {
  document.querySelector('.player_button_prev').addEventListener('click', () => {
    if (index <= 0) {
      index += (listMusic.length - 1);
    } else {
      index--;
    }
    audioElement.src = listMusic[index].audio;
    audioElement.play();
    toggleImageInPlayer(index);
  });
}

const toggleImageInPlayer = (currentIndex) => {
  document.querySelector('img').src = listMusic[currentIndex].img;
}

toggleIconPlay();
switchNextTrack();
switchPrevTrack();