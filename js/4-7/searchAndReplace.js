/* Task #7: Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".

function myReplace(str, before, after) {
  return str;
} */


function myReplace(str, before, after) {
  let i = str.indexOf(before);

  if (str[i] === str[i].toUpperCase()) after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());

  return str.replace(before, after);
}


console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch"
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error"
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John"
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms"