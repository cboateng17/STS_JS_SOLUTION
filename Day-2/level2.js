// Q1.
let quote_1 = '\"There is no exercise better for the heart than reaching down and lifting people up.\"';
console.log(quote_1);
// Q2.
let quote_2 = "\"Love is not patronizing and charity isn't about pity, it is about love.\n Charity and love are the same with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(quote_2);
// Q3.
let num = '10';
let number = 10;
let numInt = +num;
console.log(typeof numInt == typeof number);
// Q4.
let parseFloat = '9.8'
let numFloat = 10 
let stringFloat = +parseFloat;
console.log(Math.round(stringFloat));
// Q5.
let program = 'jargon and python';
console.log(program.includes('on'));
// Q6.
let statement = 'I hope this course is not full of jargon.';
console.log(statement.includes('jargon'));
// Q7.
let randNumZero = Math.random();
let onehundred = randNumZero * 100;
console.log(Math.round(onehundred));
// Q8.
let randNumFifty = (Math.floor(Math.random() * 51) + 50);
console.log(randNumFifty);
// Q9.
let randNumTwoFifty = Math.floor(Math.random() * 256);
console.log(randNumTwoFifty);
// Q10.
let javaScript = 'JavaScript';
let javaRand = Math.floor(Math.random() * javaScript.length);
let randomCharacter = javaScript[javaRand];
console.log(randomCharacter);
// Q11.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
// Q12.
let statement_2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(statement_2.indexOf('because'));

console.log(statement_2.substr(31,23));
