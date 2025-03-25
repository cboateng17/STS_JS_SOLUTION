// Q1.
let firstName = 'Carlos';
let lastName = 'Boateng';
let country = 'Ghana';
let city = 'Kumasi';
let age = 25;
let isMarried = false;
const year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Q2.
let string = '10';
let num = 10;
console.log(typeof string);
console.log(typeof num);
console.log(string === num);

// Q3.
let number = '9.8';
let figure = 10;
let numberInt = parseInt(number);
console.log(numberInt == figure);

// Q4i.
let truthyOrFalsy = '30 Days of JavaScript';
 
let truthy_1 = ('Days') ? 'truthy' : 'falsy';
console.log(truthy_1);

let truthy_2 = ('of') ? 'truthy' : 'falsy';
console.log(truthy_2);

let truthy_3 = ('JavaScript') ? 'truthy' : 'falsy';
console.log(truthy_3);

// Q4ii.
let falsy_1 = (0) ? 'truthy' : 'falsy';
console.log(falsy_1);

let falsy_2 = ('') ? 'truthy' : 'falsy';
console.log(falsy_2);

let falsy_3 = (null) ? 'truthy' : 'falsy';
console.log(falsy_3);

// Q5.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4'); 

// Q5xi.
console.log('python'.length > 'jargon'.length);

// Q6.
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// Q6xi.
console.log('dragon'.includes('on') && 'python'.includes('on'));

// Q7.
const now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 2, 0 Being January
console.log(now.getDate()); // 24th
console.log(now.getDay()); // 1, it is Monday with 0 being sunday
console.log(now.getHours()); // 14, 14:59pm
console.log(now.getMinutes()); // 59, 14:59pm
console.log(now.getTime()); // 1742828356584

