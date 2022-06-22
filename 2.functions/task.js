// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  // Ваш код, проверка значений
  min = Infinity;
  max = -Infinity;
  sum = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    sum = sum + arr[i];

    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  } 

  avg = sum / len;
  avg = +avg.toFixed(2);

  console.log(sum, len, avg, avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  console.log(func);
  const len = arrOfArr.length;

  for (let i = 0; i < len; i++) {
    const result = func(arrOfArr[i]);

    if (max < result) {
      max = result;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {

  let max = -Infinity;
  let min = Infinity;
  const len = arr.length;

  for (let i = 0; i < len; i++) {

    if (max < arr[i]) {
    max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return Math.abs(max - min);
}
