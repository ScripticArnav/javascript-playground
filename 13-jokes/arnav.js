const jokes = document.querySelector('#display-joke');
const btn = document.querySelector('#getJoke');
const url = 'https://api.chucknorris.io/jokes/random';
const url2 = 'https://official-joke-api.appspot.com/random_ten';


// handle this end point with XMLHttpRequest
/*function updateJoke(jokeSetup, jokePuchline) {
  jokes.innerHTML = `
    ${jokeSetup}
    <br>
    <span>${jokePuchline}</span>
  `;
}
btn.addEventListener('click', () => {
  xhr.open('GET', url2);
  xhr.send();
});

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState == 4) {
    const data = JSON.parse(this.responseText);

    const index = Math.floor(Math.random() * data.length);
    const randomJokeSetup = data[index].setup;
    const randomJokePunchline = data[index].punchline;
    updateJoke(randomJokeSetup, randomJokePunchline);
  }
};*/

// handle this end point with promises
async function updateUIJoke(){
  const randomJoke = await getRandomJoke()
  jokes.innerHTML = `
    ${randomJoke.setup}
    <br>
    <span>${randomJoke.punchline}</span>
  `;
}

async function getAllJokes(){
  const res = await fetch(url2)
  const jokes = await res.json()
  return jokes;
}

async function getRandomJoke(){
  const AllJokes = await getAllJokes()
  const randomJoke = AllJokes[Math.floor(Math.random()*AllJokes.length)]
  return randomJoke
}

btn.addEventListener('click', function(){
  updateUIJoke()
  
})

// handle the case of race condition
