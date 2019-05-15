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

module.exports.getFibonacciSeriesIteratively = async (n) => {
    const results = [];

    let x = 0, y = 1;

    if (!n) {
        n = 10;
    }

    for (let i = 0; i < n; i++) {
        const z = x + y;
        results.push(z);
        x = y;
        y = z;
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