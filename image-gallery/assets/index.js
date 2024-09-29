const containerImage = document.querySelector('.container_image_gallery');

let valueInput = 'spring';

async function getData() {
  let url = `https://api.unsplash.com/search/photos?query=${valueInput}&per_page=15&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  const res = await fetch(url);
  const data = await res.json();

  renderImages(data);
}

const cleanContainerImage = () => {
  document.querySelector('.container_image_gallery').innerHTML = '';
}

const renderImages = (data) => {
  const arr = data.results;

  cleanContainerImage();
  
  arr.map((value) => {
    const imagePath = value.urls.regular;
    createImg(imagePath);
  })
}

const createImg = (imagePath) => {
  const elementImg = document.createElement('img');

  elementImg.classList.add('image_gallery');
  elementImg.src = `${imagePath}`;
  elementImg.alt = `image`;
  containerImage.append(elementImg);
}

const getEnteredTextForSearch = () => {
  const input = document.querySelector('.input-search');
  const buttonSearch = document.querySelector('.button_search_icon');

  buttonSearch.addEventListener('click', () => {
    valueInput = input.value;
    getData();
  });
}

getData();
getEnteredTextForSearch();