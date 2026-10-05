const fibonacci = function fibo(n) {

    if(typeof n != 'number' || isNaN(n) || n < 0) return "OOPS";
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
