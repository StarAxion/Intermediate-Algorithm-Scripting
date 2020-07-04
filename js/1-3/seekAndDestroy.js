/* Task #3: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
You have to use the arguments object.

function destroyer(arr) {
  return arr;
} */


function destroyer(arr) {
  let args = Array.from(arguments);
  // or:
  // let args = Array.prototype.slice.call(arguments);
  // or:
  // let args = [].slice.call(arguments);
  // or:
  // let args = [...arguments];

  return arr.filter(item => args.indexOf(item) === -1);
  // or:
  // return arr.filter(item => !args.includes(item));
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // destroyer([2, 3, 2, 3], 2, 3) should return []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]


function destroyerAlt(arr, ...args) {
  let resultArr = [];

  arr.forEach(item => {
    if (args.indexOf(item) === -1) resultArr.push(item);
    // or:
    // if (!args.includes(item)) resultArr.push(item);
  });

  return resultArr;
}


console.log(destroyerAlt([1, 2, 3, 1, 2, 3], 2, 3)); // destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
console.log(destroyerAlt([1, 2, 3, 5, 1, 2, 3], 2, 3)); // destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
console.log(destroyerAlt([3, 5, 1, 2, 2], 2, 3, 5)); // destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
console.log(destroyerAlt([2, 3, 2, 3], 2, 3)); // destroyer([2, 3, 2, 3], 2, 3) should return []
console.log(destroyerAlt(["tree", "hamburger", 53], "tree", 53)); // destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]
console.log(destroyerAlt(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]