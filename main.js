import './style.css';

let values = [5, 3, 1, 2, 4];
let median = findMedian(values);

document.getElementById('app').textContent = `The median is: ${median}`;

function findMedian(arr) {
  let sortArray = arr.sort((a, b) => a - b);
  let total = arr.length;
  let index = 0;
  let median = 0;

  index = Math.floor(total / 2);
  median = sortArray[index];

  return median;
}
