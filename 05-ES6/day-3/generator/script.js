let fib = [0, 1];

// number of elements passed as a parameter
function* genFibonacciA(elNum) {
    yield fib[0];
    yield fib[1];

    for(let i = 2; i <= elNum; i++) {
        let current = fib[i - 2] + fib[i - 1];
        fib.push(current);
        yield current;
    }
}

// max number passed as a parameter
function* genFibonacciB(max) {
    if (fib[0] < max) {
        yield 0;
    }

    while(fib.at(-1) < max) {
        yield fib.at(-1);
        let current = fib.at(-2) + fib.at(-1);
        fib.push(current);
    }
}

// var gen = genFibonacciB(40)
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());