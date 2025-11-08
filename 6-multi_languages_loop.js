const x = ["C is fun", "Python is cool", "JavaScript is amazing"];

let out = "";
for (let i = 0; i < x.length; i++) {
    out += x[i] + "\n";
}
console.log(out.trim());