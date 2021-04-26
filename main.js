const images = Array.from(document.querySelectorAll('.images'));
const dots = Array.from(document.querySelectorAll('.dot'));
const left = document.querySelector('.left');
const right = document.querySelector('.right');

images[0].classList.add('framed');
dots[0].classList.add('highlight');

// Find any images with class name 'framed' and remove it.
const removeFramed = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('framed')) {
      images[i].classList.remove('framed');
      dots[i].classList.remove('highlight');
      return images.indexOf(images[i]);
    }
  }
};

// Find currently framed image and shift to the left by one.
const shiftLeft = () => {
  const oldIndex = removeFramed('framed', images);
  let newIndex;
  if (oldIndex === 0) {
    newIndex = images.length - 1;
    images[newIndex].classList.add('framed');
    dots[newIndex].classList.add('highlight');
  } else {
    newIndex = oldIndex - 1;
    images[newIndex].classList.add('framed');
    dots[newIndex].classList.add('highlight');
  }
};

// Find currently framed image and shift to right by one.
const shiftRight = () => {
  const oldIndex = removeFramed('framed', images);
  let newIndex;
  if (oldIndex === 3) {
    newIndex = 0;
    images[newIndex].classList.add('framed');
    dots[newIndex].classList.add('highlight');
  } else {
    newIndex = oldIndex + 1;
    images[newIndex].classList.add('framed');
    dots[newIndex].classList.add('highlight');
  }
};

right.addEventListener('click', () => {
  shiftRight();
});

left.addEventListener('click', () => {
  shiftLeft();
});

// Add event listener on each dot to change to image based on index.
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    removeFramed();
    dot.classList.add('highlight');
    const index = dots.indexOf(dot);
    images[index].classList.add('framed');
  });
});
