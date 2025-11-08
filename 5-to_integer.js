// /c:/Users/abele/Documents/Projects/LocalRepoProject/JS-Fundamentals/5-to_integer.js
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (!Number.isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log('Not a number');
}