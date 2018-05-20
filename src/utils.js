console.log('utils.js is running!!!!');

const root = (x)=> x**(0.5);

const add = (a,b)=> a+b;
const subtract = (a,b)=> a-b;

export {root, add, subtract as default};


//this was in app.js before
//////////////////////////////////////////////////////////////////////////////////

// import subtract, {root, add} from './utils.js';
// import isSenior, {isAdult, canDrink} from './person.js';
// import validator from 'validator';
// console.log('app running');
// console.log(root(588289));

// console.log(add(5978, 7864)); //13842
// console.log(subtract(5978, 7864)); //-1886

// console.log(isAdult(17));
// console.log(isAdult(77));

// console.log(canDrink(20));
// console.log(canDrink(22));
// console.log(isSenior(66));

// console.log(validator.isEmail('testing'));
// console.log(validator.isEmail('bob@yahoo.com'));