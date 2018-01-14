//es5 synthax
function getMessageEs5() { 
	const year = new Date().getFullYear();
  
  return 'The year is ' + year;
}


//es6 synthax
function getMessageEs6() { 
  
  return `The year is ${new Date().getFullYear()}`;
}

getMessageEs6();

//you can put any valid javascript expression in those curly braces

//practical example

//PHP 
// $data = '{"device_id": "'.$device_id.'", "guid":"'.$guid.'"}';

const device_id = 5;
const guid = 20;

//es5
var dataEs5 = '{"device_id": "'+ device_id +'", "guid":"'+ guid +'"}';

//es6

const data = `{"device_id": "${ device_id}", "guid": "${guid}"}`;
data;

//exercice 1

const number = 5;

function doubleMessage(number) {
  return `Your number doubled is ${number * 2}`;
}

doubleMessage(number);

//exercice 2

const firstName = 'edlef';
const lastName = 'bob';

function fullName(firstName, lastName) {
   return `${firstName} ${lastName}`;
}

fullName(firstName, lastName);