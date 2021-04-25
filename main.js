const images = Array.from(document.querySelectorAll('.images'));
const left = document.querySelector('.left');
const right = document.querySelector('.right');

images[0].classList.add('framed');

// Find any images with class name 'framed' and remove it.
const removeClassName = (framedClass, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains(framedClass)) {
      arr[i].classList.remove(framedClass);
      return arr.indexOf(arr[i]);
    }
  }
};

// Find currently framed image and shift to the left by one.
const shiftLeft = (framedClass, arr) => {
  const oldIndex = removeClassName(framedClass, images);
  let newIndex;
  if (oldIndex === 0) {
    newIndex = arr.length - 1;
    arr[newIndex].classList.add(framedClass);
  } else {
    newIndex = oldIndex - 1;
    arr[newIndex].classList.add(framedClass);
  }
};

left.addEventListener('click', () => {
  shiftLeft('framed', images);
});

right.addEventListener('click', () => {});
