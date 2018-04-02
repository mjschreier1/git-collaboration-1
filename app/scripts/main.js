const numbers = [2, 3, 5, 65, 7, 99, 42];

const evenNumbers = numbers => numbers.reduce((acc, num) => {
    if(num % 2 === 0) { acc.push(num) };
    return acc;
}, []);

const sum = numbers => numbers.reduce((acc, num) => acc += num, 0);

const people = [
    {
        name: Will,
        age: 26
    },
    {
        name: Michael,
        age: 26
    }
];

const morePeople = [
    {
        name: Greg,
        age: 30
    },
    {
        name: Dave,
        age: 26
    }
];