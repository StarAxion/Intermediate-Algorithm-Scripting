/* Task #6: Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
Should handle words where the first vowel comes in the middle of the word ("schwartz" should return "artzschway").
Should handle words without vowels ("rhythm" should return "rhythmay").

function translatePigLatin(str) {
  return str;
} */


function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'], consonants = [];

  if (vowels.indexOf(str[0]) !== -1) {
    return str + 'way';
  } else if (vowels.every(vowel => !str.includes(vowel))) {
    return str + 'ay';
  } else {
    let i, strSize = str.length;

    for (i = 0; i < strSize; i += 1) {
      if (vowels.includes(str[i])) break;
      consonants.push(str[i]);
    }

    return str.split('').splice(consonants.length).join('') + consonants.join('') + 'ay';
  }
}


console.log(translatePigLatin("california")); // should return "aliforniacay"
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay"
console.log(translatePigLatin("glove")); // should return "oveglay"
console.log(translatePigLatin("algorithm")); // should return "algorithmway"
console.log(translatePigLatin("eight")); // should return "eightway"
console.log(translatePigLatin("schwartz")); // should return "artzschway"
console.log(translatePigLatin("rhythm")); // should return "rhythmay"