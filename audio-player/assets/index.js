const buttonPLay = document.querySelector('.player_button-play');
const audioElement = new Audio();

let isPlay = false;

const playAudio = () => {
  if (!isPlay) {
    audioElement.src = './assets/audio/Arsenium_and_Mianna_and_Heren_-_Bon_Ami.mp3';
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
    document.querySelector('.player_icon_play').classList.toggle('play');
    document.querySelector('.player_icon_play').classList.toggle('pause');
    playAudio();
  });
}

toggleIconPlay();