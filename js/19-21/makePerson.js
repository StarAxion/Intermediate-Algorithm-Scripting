/* Task #20: Make a Person

Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};
var bob = new Person('Bob Ross'); */


let Person = function (firstAndLast) {
  let personFullName = firstAndLast;

  this.getFirstName = function () {
    return personFullName.split(' ')[0];
  };

  this.getLastName = function () {
    return personFullName.split(' ')[1];
  };

  this.getFullName = function () {
    return personFullName;
  };

  this.setFirstName = function (firstName) {
    personFullName = `${firstName} ${this.getLastName()}`;
  };

  this.setLastName = function (lastName) {
    personFullName = `${this.getFirstName()} ${lastName}`;
  };

  this.setFullName = function (fullName) {
    personFullName = fullName;
  };
};

let bob = new Person('Bob Ross');


console.log(Object.keys(bob).length); // should return 6
console.log(bob instanceof Person); // should return true
console.log(bob.firstName); // should return undefined
console.log(bob.lastName); // should return undefined
console.log(bob.getFirstName()); // should return "Bob"
console.log(bob.getLastName()); // should return "Ross"
console.log(bob.getFullName()); // should return "Bob Ross"

bob.setFirstName("Haskell");
console.log(bob.getFullName()); // should return "Haskell Ross"

bob.setLastName("Curry");
console.log(bob.getFullName()); // should return "Haskell Curry"

bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // should return "Haskell Curry"

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName()); // should return "Haskell"

bob.setFullName("Haskell Curry");
console.log(bob.getLastName()); // should return "Curry"
