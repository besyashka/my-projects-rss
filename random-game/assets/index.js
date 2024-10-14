import { wordsHints } from './js/words-hints.js';
import { renderModalWindow } from './js/render-modal-window.js';

export const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
};

export let remainingAttempts = 6;

const overlay = createElement('div', 'overlay');
const container = createElement('div', 'container');
const title = createElement('h1', 'title');
const textAboutGame = createElement('p', 'about-game');
const columns = createElement('div', 'columns-2');
const wrapperImgGallows = createElement('div', 'wrapper-img');
const imgGallows = createElement('img', 'gallows');
const content = createElement('div', 'content');
const closedLetter = createElement('p', 'closed-letter');
const hint = createElement('p', 'text');
const attempts = createElement('p', 'text');
const attemptsNum = createElement('span', 'attempts');
const keyboard = createElement('div', 'keyboard');
const footer = createElement('footer', 'footer');
const year = createElement('span', 'footer-year');
const linkFooterGithub = createElement('a', 'footer-link');
const imgFooterGithub = createElement('img', 'footer-img');
const linkFooterRs = createElement('a', 'footer-link');
const imgFooterRs = createElement('img', 'footer-img');

title.textContent = 'Game Hangman';
textAboutGame.innerHTML = '!Make sure you have the English keyboard layout enabled and capslock disabled<br/>(!Убедитесь, что у вас включена английская раскладка клавиатуры и отключен капслок!)';
attempts.textContent = `remaining attempts: `;
attemptsNum.textContent = `${remainingAttempts}/6`;
year.textContent = '©2024';

imgGallows.src = './assets/img/gallows.png';
imgFooterGithub.src = './assets/img/github.svg';
imgFooterRs.src = './assets/img/rss-logo.svg';
imgGallows.alt = 'gallows img';
imgFooterGithub.alt = 'github icon';
imgFooterRs.alt = 'rs school icon';

linkFooterGithub.href = 'https://github.com/besyashka';
linkFooterRs.href = 'https://rs.school/courses/javascript-ru';

document.body.append(overlay);
document.body.append(container);
container.append(title);
container.append(textAboutGame);
container.append(columns);
container.append(footer);
columns.append(wrapperImgGallows);
wrapperImgGallows.append(imgGallows);
columns.append(content);
content.append(closedLetter);
content.append(hint);
content.append(attempts);
content.append(keyboard);
attempts.append(attemptsNum);
footer.append(year);
footer.append(linkFooterGithub);
linkFooterGithub.append(imgFooterGithub);
footer.append(linkFooterRs);
linkFooterRs.append(imgFooterRs);

let randomWord = wordsHints[Math.floor(Math.random() * wordsHints.length)];
let arr = [];

const addWordAndHint = () => {
  for (let i = 0; i < randomWord.word.length; i++) {
    arr[i] = '_';
  }

  closedLetter.append(arr.join(' '));
  hint.innerHTML = `hint: ${randomWord.hint}`;

  console.log(randomWord.word);
};

document.addEventListener('keydown', (e) => {
  const pressKey = e.key;

  handleClickKeyPress(pressKey);
});

let check = false;

const updateAttempts = (check) => {
  if (check === true || remainingAttempts === 0) {
    return;
  } else {
    remainingAttempts--;
    attemptsNum.innerHTML = `${remainingAttempts}/6`;
    renderHumanPart();
  }
};

const renderHumanPart = () => {
  let element;
  if (remainingAttempts === 5) {
    element = createElement('img', 'human-head');
    element.src = './assets/img/head.png';
  } else if (remainingAttempts === 4) {
    element = createElement('img', 'human-body');
    element.src = './assets/img/body.png';
  } else if (remainingAttempts === 3) {
    element = createElement('img', 'human-hand-one');
    element.src = './assets/img/hand-one.png';
  } else if (remainingAttempts === 2) {
    element = createElement('img', 'human-hand-two');
    element.src = './assets/img/hand-two.png';
  } else if (remainingAttempts === 1) {
    element = createElement('img', 'human-leg-one');
    element.src = './assets/img/leg-one.png';
  } else if (remainingAttempts === 0) {
    element = createElement('img', 'human-leg-two');
    element.src = './assets/img/leg-two.png';
  }

  element.classList.add('human');
  return wrapperImgGallows.append(element);
};

const handleClickKeyPress = (pressKey) => {
  check = false;

  for (let i = 0; i <= randomWord.word.length; i++) {
    if (randomWord.word[i] === pressKey) {
      arr[i] = pressKey;
      closedLetter.innerHTML = arr.join(' ');
      check = true;
    }
  }

  openModalWindow();
  updateAttempts(check);
};

const openModalWindow = () => {
  if (arr.join('') === randomWord.word) {
    overlay.classList.add('active');
    renderModalWindow();
  } else if (remainingAttempts === 1) {
    setTimeout(() => {
      overlay.classList.add('active');
      renderModalWindow();
    }, 1000);
  }
};

const renderKeysOnVirtualKeyboard = () => {
  const keyboardArr = [
    113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98,
    110, 109,
  ];

  for (let i = 0; i < keyboardArr.length; i++) {
    const keyElement = createElement('div', 'keyboard-key');

    //keyElement.setAttribute('data', keyboardArr[i]);
    keyElement.textContent = String.fromCharCode(keyboardArr[i]);
    keyboard.appendChild(keyElement);

    if (i === 10 || i === 19) {
      const emptyKeyElement = createElement('div', 'empty-key');
      keyboard.appendChild(emptyKeyElement);
    }
  }
};

const handleVirtualKeyClick = () => {
  keyboard.addEventListener('click', (e) => {
    if (e.target.closest('.keyboard-key')) {
      let check = false;

      for (let i = 0; i <= randomWord.word.length; i++) {
        if (randomWord.word[i] === e.target.innerText) {
          arr[i] = e.target.innerText;
          check = true;
        }
      }

      if (e.target.closest('.keyboard-key')) {
        handleClickKeyPress(e.key);
      }

      closedLetter.innerHTML = arr.join(' ');

      addClassActiveForKey();
      openModalWindow();
      updateAttempts(check);
    }
  });
};

const addClassActiveForKey = () => {
  document.querySelectorAll('.keyboard .keyboard-key').forEach((key) => {
    key.addEventListener('click', () => {
      key.classList.add('key-active');
    });
  });
};

addWordAndHint();
handleClickKeyPress();
renderKeysOnVirtualKeyboard();
handleVirtualKeyClick();