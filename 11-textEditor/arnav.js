document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector("#input-field");
  const outputField = document.querySelector("#output-field");

  function formatText(format) {
    let formattedText = "";

    switch (format) {
      case "uppercase":
        // formattedText = inputField.value.toUpperCase();
        formattedText = inputField.value.toUpperCase();
        break;
      case "lowercase":
        formattedText = inputField.value.toLowerCase();
        break;
      case "capitalize":
        formattedText = inputField.value.replace(/\b\w/g, (char) =>
          char.toUpperCase()
        );
        break;
      case "italic":
        formattedText = `<em>${inputField.value}</em>`;
        break;
      case "underline":
        formattedText = `<u>${inputField.value}</u>`;
        break;
      default:
        formattedText = inputField.value;
    }
    console.log(outputField.innerHTML);
    outputField.innerHTML = formattedText;
  }

  document.querySelectorAll(".btn").forEach((button) =>
    button.addEventListener("click", function () {
      const formatType = button.classList.contains("uppercase")
        ? "uppercase"
        : button.classList.contains("lowercase")
        ? "lowercase"
        : button.classList.contains("bold")
        ? "bold"
        : button.classList.contains("italic")
        ? "italic"
        : button.classList.contains("capitalize")
        ? "capitalize"
        : button.classList.contains("underline")
        ? "underline"
        : "";

      formatText(formatType);
    })
  );
});
