const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const cat = document.querySelector('.container');

const getRandomCat = () => {
  btn.addEventListener('click', async () => {
    const data = await fetch(url).then((res) => res.json());
    console.log(data[0]);
    // cat.innerHTML = `<img src=${data[0].url} id=${data[0].id} width=${data[0].width} height=${data[0].height}>`;
    const catImage = document.createElement('img');
    catImage.src = data[0].url;
    catImage.width = data[0].width; 
    catImage.height = data[0].height; 
    cat.innerHTML = ''; 
    cat.appendChild(catImage)
  });
};

getRandomCat();
