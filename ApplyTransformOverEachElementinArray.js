function map(arr, fn) {
  const transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const transformedValue = fn(arr[i], i);
    transformedArray.push(transformedValue);
  }
  return transformedArray;
}

// Test cases
const plusone = function plusone(n) { return n + 1; };
const plusI = function plusI(n, i) { return n + i; };
const constant = function constant() { return 42; };

// Example 1
const arr1 = [1, 2, 3];
const result1 = map(arr1, plusone); // [2, 3, 4]
console.log(result1);

// Example 2
const arr2 = [1, 2, 3];
const result2 = map(arr2, plusI); // [1, 3, 5]
console.log(result2);

// Example 3
const arr3 = [10, 20, 30];
const result3 = map(arr3, constant); // [42, 42, 42]
console.log(result3);
