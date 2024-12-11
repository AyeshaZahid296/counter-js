// Select elements
const counterValue = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Initialize counter
let count = 0;

// Update Counter with Animation
function updateCounter() {
  counterValue.textContent = count;

  // Add "grow" class for the animation
  counterValue.classList.add('grow');
  setTimeout(() => {
    counterValue.classList.remove('grow');
  }, 200); // Remove the class after 200ms
}

// Button Events
decreaseBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});
