const { argv } = require('node:process');

// Count only user-supplied arguments (ignore node executable and script path)
const userArgs = argv.slice(2);

if (userArgs.length === 0) {
  console.log("No argument");
} else if (userArgs.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}