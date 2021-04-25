const images = Array.from(document.querySelectorAll('.images'));
const left = document.querySelector('.left');
const right = document.querySelector('.right');

images[0].classList.add('framed');

// Find any images with class name 'framed' and remove it.
const removeClassName = (rmvClass, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains(rmvClass)) {
      arr[i].classList.remove(rmvClass);
      return arr.indexOf(arr[i]);
    }
  }
};

// Find currently framed image and shift to the left by one.
const shiftLeft = (arr) => {
  let oldIndex = removeClassName('framed', images);
  let newIndex;
  if (oldIndex === 0) {
    newIndex = arr.length - 1;
    arr[newIndex].classList.add('framed');
  } else {
    newIndex = oldIndex - 1;
    arr[newIndex].classList.add('framed');
  }
};

left.addEventListener('click', () => {
  shiftLeft(images);
});
