const clock = document.getElementById('clock');
const day = document.getElementById('day');

// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  day.innerHTML = date.toLocaleDateString();
}, 1000);
