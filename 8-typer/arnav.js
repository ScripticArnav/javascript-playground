const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing
    typedTextSpan.textContent += currentWord.charAt(charIndex);
    charIndex++;

    // Check if word fully typed
    if (charIndex === currentWord.length) {
      isDeleting = true;
      // Move to the next word after a delay
      setTimeout(erase, 1000);
    } else {
      // Move to typing next character within the same word
      setTimeout(type, 200);
    }
  } else {
    // Deleting
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    // Check if word fully erased
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      // Move to typing next word after a delay
      setTimeout(type, 500);
    } else {
      // Continue deleting characters within the same word
      setTimeout(erase, 100);
    }
  }
}

function erase() {
  // Call type function to simulate typing
  type();
}

// Start typing animation
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, 1000); // Delay initial typing animation
});