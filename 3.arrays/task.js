function compareArrays(arr1, arr2) {
  
  // Ваш код
  let result = arr1.every((item, idx) => arr1.length === arr2.length && arr1[idx] === arr2[idx]);
  return result;
 // boolean
}

function advancedFilter(arr) {
  

  // Ваш код
  let resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
  return resultArr; // array

}
