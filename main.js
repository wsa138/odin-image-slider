const images = Array.from(document.querySelectorAll('.images'));
const left = document.querySelector('.left');
const right = document.querySelector('.right');

images[3].classList.add('framed');

/* TODO: Function that runs when a direction arrow is 
clicked that iterates though the images array the necessary 
amount of times. */

left.addEventListener('click', () => {
  console.log('clicked left');
});

right.addEventListener('click', () => {
  console.log('clicked right');
});
