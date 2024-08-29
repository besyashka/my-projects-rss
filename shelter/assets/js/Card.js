export class Card {
  constructor(name, img, type, breed, description, age, inoculations, diseases, parasites) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;   
  }

  generateSlideCard() {
    let templateSlide = '';

    templateSlide += `<div class="slide">`;
    templateSlide += `<div class="slide_img">`;
    templateSlide += `<img src=${this.img} alt="pets ${this.img}">`;
    templateSlide += `</div>`;
    templateSlide += `<span class="our_friends_text">${this.name}</span>`;
    templateSlide += `<button class="button">Learn more</button>`;
    templateSlide += `</div>`;

    return templateSlide;
  }

  generatePetsCardForModal() {
    const listItemsArray = [
      `Age: ${this.age}`,
      `Inoculations: ${this.inoculations}`,
      `Diseases: ${this.diseases}`,
      `Parasite: ${this.parasites}`
    ];

    const modalWindow = document.createElement('div');
    const modalContainer = document.createElement('div');
    const buttonClose = document.createElement('button');;
    const img = document.createElement('img');
    const modalContent = document.createElement('div')
    const nameElement = document.createElement('h3');
    const typeElement = document.createElement('h4');
    const descriptionElement = document.createElement('h5');
    const list = document.createElement('ul');

    modalWindow.classList.add('modal_window');
    buttonClose.classList.add('button_modal', 'button_control');
    modalContainer.classList.add('modal_container');
    img.classList.add('modal_img');
    modalContent.classList.add('modal_content');
    descriptionElement.classList.add('modal_text');
    list.classList.add('modal_list');

    buttonClose.textContent = 'х';
    img.src = this.img;
    img.alt = `pets ${this.type}`;
    nameElement.textContent = this.name;
    typeElement.textContent = `${this.type} - ${this.breed}`;
    descriptionElement.textContent = this.description;
    
    for (let i = 0; i < listItemsArray.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = listItemsArray[i];
      listItem.classList.add('modal_item');
      list.appendChild(listItem);
    }

    modalWindow.appendChild(buttonClose);
    modalWindow.appendChild(modalContainer);

    modalContainer.appendChild(img);
    modalContainer.appendChild(modalContent);

    modalContent.appendChild(nameElement);
    modalContent.appendChild(typeElement);
    modalContent.appendChild(descriptionElement);
    modalContent.appendChild(list);  

    document.querySelector('.overlay').appendChild(modalWindow);
    
    return modalWindow;
  }
};