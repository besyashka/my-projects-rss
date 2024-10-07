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
const imgElement = createElement('img', 'image');
const content = createElement('div', 'content');
const closedLetter = createElement('p', 'closed-letter');
const hint = createElement('p', 'text');
const attempts = createElement('p', 'text');
const keyboard = createElement('div', 'keyboard');
const footer = createElement('footer', 'footer');
const year = createElement('span', 'footer-year');
const linkFooterGithub = createElement('a', 'footer-link');
const imgFooterGithub = createElement('img', 'footer-img');
const linkFooterRs = createElement('a', 'footer-link');
const imgFooterRs = createElement('img', 'footer-img');

title.textContent = 'Game Hangman';
textAboutGame.textContent = '!Make sure you have the English keyboard layout enabled and capslock disabled';
hint.textContent = 'hint:';
attempts.textContent = 'remaining attempts: 6/6';
year.textContent = '©2024';

imgElement.src = './assets/img/gallows.png';
imgFooterGithub.src = './assets/img/github.svg';
imgFooterRs.src = './assets/img/rss-logo.svg';
imgElement.alt = 'gallows img';
imgFooterGithub.alt = 'github icon';
imgFooterRs.alt = 'rs school icon';

document.body.append(overlay);
document.body.append(container);
container.append(title);
container.append(textAboutGame);
container.append(columns);
container.append(footer);
columns.append(imgElement);
columns.append(content);
content.append(closedLetter);
content.append(hint);
content.append(attempts);
footer.append(year);
footer.append(linkFooterGithub);
linkFooterGithub.append(imgFooterGithub);
footer.append(linkFooterRs);
linkFooterRs.append(imgFooterRs);