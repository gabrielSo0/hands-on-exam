let a = 0, b = 1, c, countZero = 0;

const givenNumber = 10;

console.log(`The given number is: ${givenNumber}`);

console.log(`Fashing series is: `);
console.log(countZero);

for (let i = 0; i < givenNumber; i++) {

    count = a;
    c = a + b;
    a = b;
    b = c;

    console.log(a);
}