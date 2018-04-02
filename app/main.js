const numbers = [2, 3, 5, 65, 7, 99, 42];

const evenNumbers = numbers => numbers.reduce((acc, num) => {
    if(num % 2 === 0) { acc.push(num) };
    return acc;
}, [])