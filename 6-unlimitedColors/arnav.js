const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  function stopChanging() {
    clearInterval(intervalId);
    intervalId = null;
  }
  const startChanging = function () {
    if (!intervalId) {
      intervalId = setInterval(randomBackground, 1000);
    }
    function randomBackground() {
      document.querySelector('body').style.backgroundColor = randomColor();
    }
  };
  document.querySelector('#start').addEventListener('click', startChanging);
  document.querySelector('#stop').addEventListener('click', stopChanging);
  