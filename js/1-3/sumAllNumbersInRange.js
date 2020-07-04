/* Task #1: Sum All Numbers in a Range

We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  return 1;
} */


function sumAll(arr) {
  let i, number = 0;

  if (arr[0] < arr[1]) {
    for (i = arr[0]; i <= arr[1]; i += 1) {
      number += i;
    }
  } else {
    for (i = arr[1]; i <= arr[0]; i += 1) {
      number += i;
    }
  }

  return number;
}


console.log(typeof sumAll([1, 4])); // sumAll([1, 4]) should return a number
console.log(sumAll([1, 4])); // sumAll([1, 4]) should return 10
console.log(sumAll([4, 1])); // sumAll([4, 1]) should return 10
console.log(sumAll([5, 10])); // sumAll([5, 10]) should return 45
console.log(sumAll([10, 5])); // sumAll([10, 5]) should return 45