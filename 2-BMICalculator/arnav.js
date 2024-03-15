const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height (Not a Number)";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight (Not a Number)";
  } else {
    const bmi = weight / ((height * height) / 10000);
    results.innerHTML = `<span>${bmi.toFixed(2)}</span><br>`;
    if (bmi < 18.6) {
      results.innerHTML += "<span>Under Weight</span>";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML += "<span>Normal Weight</span>";
    } else {
      results.innerHTML += "<span>Over Weight</span>";
    }
  }
});
