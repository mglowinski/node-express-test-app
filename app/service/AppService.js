module.exports.getSumOfSquares = async (n) => {
    if (!n) {
        n = 10;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += (i * i);
    }
    return sum;
};

module.exports.getFibonacciSeriesRecursively = async (n) => {
    const results = [];

    if (!n) {
        n = 10;
    }

    for (let i = 0; i < n; i++) {
        results.push(fib(i));
    }

    return results;
};

module.exports.getFibonacciValueIteratively = async (n) => {
    if (!n) {
        n = 10;
    }

    if (n <= 1) {
        return n;
    }

    let fib = 1;
    let prevFib = 1;

    for (let i = 2; i < n; i++) {
        const temp = fib;
        fib += prevFib;
        prevFib = temp;
    }

    return fib;
};

function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    } else {
        return n;
    }
}