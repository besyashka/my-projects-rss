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

toggleIconPlay();