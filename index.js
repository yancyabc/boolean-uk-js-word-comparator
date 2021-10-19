/*
Instructions
- Get 2 separate user input with one word each
- Output a string telling the user which word is longer
*/


const firstWord = prompt("what is your first word?");
const secondWord = prompt("what is your second word?");

console.log(firstWord);
console.log(secondWord);

if (firstWord.length > secondWord.length) {
    console.log("first word is longer");
} else {
    console.log("second word is longer");
}

