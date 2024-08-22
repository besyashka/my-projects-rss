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
};