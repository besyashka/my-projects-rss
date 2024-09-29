const url = 'https://api.unsplash.com/search/photos?query=[spring]&per_page=15&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data, 'json fail');

  renderImages(data);
}

const renderImages = (data) => {
  const arr = data.results;
  
  arr.map((value) => {
    const imagePath = value.urls.regular;
    createImg(imagePath);
  })
}

const createImg = (imagePath) => {
  const containerImage = document.querySelector('.container_image_gallery');
  const elementImg = document.createElement('img');

  elementImg.classList.add('image_gallery');
  elementImg.src = `${imagePath}`;
  elementImg.alt = `image`;
  containerImage.append(elementImg);
}

getData();