import { createElement } from '../index.js';
import { remainingAttempts } from '../index.js';
import { saveResults, getResults } from '../js/local-storage.js';

export const renderModalWindow = () => {
  const modalContainer = createElement('div', 'modal-container');
  const button = createElement('button', 'modal-button');
  const title = createElement('h3', 'modal-title');
  const list = createElement('ol', 'list');

  button.textContent = 'play again';
  title.textContent = 'Score:';

  document.body.append(modalContainer);
  modalContainer.append(button);
  modalContainer.append(title);
  modalContainer.append(list);

  const results = getResults();

  results.unshift(remainingAttempts);

  if (results.length > 10) {
    results.pop();
  }

  saveResults(results);

  results.forEach((result) => {
    const listItem = createElement('li', 'item');
    listItem.innerHTML = `attempts left unspent: ${result}`;
    list.append(listItem);
  });

  button.addEventListener('click', () => {
    modalContainer.remove();
    document.querySelector('.overlay').classList.remove('active');
    location.reload();
  });
};