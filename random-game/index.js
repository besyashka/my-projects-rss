import { wordsHints } from "./assets/js/words-hints.js";

const createElement = (tag, className) => {
  const element =  document.createElement(tag);
  element.classList.add(className);
  return element;
}

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

let remainingAttempts = 6;

title.textContent = 'Game Hangman';
textAboutGame.textContent = '!Make sure you have the English keyboard layout enabled and capslock disabled';
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
attempts.append(attemptsNum);
footer.append(year);
footer.append(linkFooterGithub);
linkFooterGithub.append(imgFooterGithub);
footer.append(linkFooterRs);
linkFooterRs.append(imgFooterRs);

let randomWord = wordsHints[Math.floor(Math.random() * wordsHints.length)]
let arr = [];

const addWordAndHint = () => {
  const wordLength = randomWord.word.length;
  for (let i = 0; i < wordLength; i++) {
    arr[i] = '_';
  }

  closedLetter.append(arr.join(" "));
  hint.innerHTML = `hint: ${randomWord.hint}`;

  console.log(randomWord.word);
}

let check = false;

const updateAttempts = (check) => {
  if (check === true || remainingAttempts === 0) {
    return;
  } else {
    remainingAttempts--;
    attemptsNum.innerHTML = `${remainingAttempts}/6`;
    renderHumanPart();
  }
}

const renderHumanPart = () => {
  let element;
  if (remainingAttempts === 5) {
    element = createElement('img','human-head');
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
}

const handleClickKeyPress = () => {
  document.addEventListener('keydown', (e) => {
    const pressKey = e.key;
    check = false;

    for (let j = 0; j <= randomWord.word.length; j++) {
      if (randomWord.word[j] === pressKey) {
        arr[j] = pressKey;
        closedLetter.innerHTML = arr.join(" ");
        check = true;
      }
    }

    updateAttempts(check);
  });
}

addWordAndHint();
handleClickKeyPress();