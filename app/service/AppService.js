module.exports.getFibonacciSeries = async (n) => {
    const results = [];

    if (!n) {
        n = 10;
    }

    for (let i = 0; i < n; i++) {
        results.push(fib(i));
    }

    return results;
};

function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    } else {
        return n;
    }
}