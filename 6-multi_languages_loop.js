const languages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let i = 0;
let out = '';
while (i < languages.length) {
    out += languages[i] + '\n';
    i++;
}
out = out.slice(0, -1);
console.log(out);
