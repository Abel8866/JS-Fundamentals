const input = process.argv[2];
const n = parseInt(input, 10);

function factorial(x) {
    if (isNaN(x)) return 1;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

console.log(factorial(n));