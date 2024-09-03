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
    const slide = document.createElement('div');
    const slideContainerImg = document.createElement('div');
    const slideImg = document.createElement('img');;
    const SlideText = document.createElement('span')
    const slideButton = document.createElement('button');

    slide.classList.add('slide');
    slideContainerImg.classList.add('slide_img');
    SlideText.classList.add('our_friends_text');
    slideButton.classList.add('button');

    slideImg.src = this.img;
    slideImg.alt = `pets ${this.type}`;
    SlideText .textContent = `${this.name}`;
    slideButton.textContent = 'Learn more';

    slide.appendChild(slideContainerImg);
    slideContainerImg.appendChild(slideImg);
    slide.appendChild(SlideText);
    slide.appendChild(slideButton);

    return slide;
  }

  generatePetsCardForModal() {
    const listItemsArray = [
      `<span class="text_accent">Age:</span> ${this.age}`,
      `<span class="text_accent">Inoculations:</span> ${this.inoculations}`,
      `<span class="text_accent">Diseases:</span> ${this.diseases}`,
      `<span class="text_accent">Parasite:</span> ${this.parasites}`
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
    nameElement.classList.add('title_modal');
    typeElement.classList.add('title_modal');
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
      listItem.innerHTML = listItemsArray[i];
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