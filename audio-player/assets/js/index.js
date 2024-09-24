import { listMusic } from './list-music.js';
const buttonPLay = document.querySelector('.player_button-play');
const audioElement = new Audio();
const progressBar = document.querySelector('.progress-bar');
const trackCurrentTime = document.querySelector('.track-current-time');

let isPlay = false;
let index = 0;

audioElement.src = listMusic[index].audio;

const playAudio = () => {
  if (!isPlay) { 
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

    if (isPlay) {
      audioElement.play();
    }

    toggleImageInPlayer(index);
    changeAuthorAndNameTrack(index);
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

    if (isPlay) {
      audioElement.play();
    }

    toggleImageInPlayer(index);
    changeAuthorAndNameTrack(index);
  });
}

const toggleImageInPlayer = (currentIndex) => {
  document.querySelector('.img').src = listMusic[currentIndex].img;
}

const changeAuthorAndNameTrack = (currentIndex) => {
  document.querySelector('.author-track').innerHTML = listMusic[currentIndex].author;
  document.querySelector('.name-track').innerHTML = listMusic[currentIndex].name;
}

const getTrackDuration  = () => {
  audioElement.addEventListener('loadedmetadata', () => {
    let audioDuration = audioElement.duration;
    const trackDuration = document.querySelector('.track-duration');
    convertTime(audioDuration, trackDuration);
  })
}

const convertTime = (seconds, time) => {
  const minutes = Math.floor(seconds / 60);
  const timeSeconds = Math.floor(seconds % 60);

  if (timeSeconds < 10) {
    time.innerHTML = `${minutes}:0${timeSeconds}`;
  } else {
    time.innerHTML = `${minutes}:${timeSeconds}`;
  };
};

const updateProgressBar = () => {
  audioElement.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(audioElement.currentTime);
    progressBar.max = Math.floor(audioElement.duration);

    const trackCurrentTime = document.querySelector('.track-current-time');
    let audioCurrentTime = audioElement.currentTime;

    convertTime(audioCurrentTime, trackCurrentTime)
  });
}

getTrackDuration();
toggleIconPlay();
switchNextTrack();
switchPrevTrack();
updateProgressBar();