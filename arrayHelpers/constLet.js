// const, let and var

//es6 -> not making use of var anymore
//const -> assign a value to a variable that we expect to never change

//let ->  value may change

//examples : before
//var name = 'jane';
//var title = 'developer';
//var hourlyWage = 40;


//after
const name = 'jane';
//person name does not change, we can not change const

let title = 'developer';
//could change with a promotion, let is like var

title = 'senior developer';

let hourlyWage = 40;
hourlyWage= 45;

//exercice 1: 

const name = 'edlef';
let age = 18;
const dateOfBirth = '14/01/2000';

//exercice 2 : refactor
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}