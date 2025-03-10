//Задание 1
function compareArrays(arr1, arr2) {
  let result;
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  result = arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]})
  return result;
}

//Задание2
function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10); 

  return resultArr;
}