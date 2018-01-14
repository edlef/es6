//fat arrow functions

//Es5 synthax for function

const add = function(a, b) {
		return a + b;
}

add(1, 2);

//Es6 synthax (use fat arrow)

const addES6 = (a, b) => {
		return a + b;
}

addES6(1, 2);

//if it contains a single javascript expression : 
//implicit return of the function

let addSingle = (a, b) => a + b;

const double = (num) => 2 * num;

//you can drop parenthesis if single argument

const doubleSingleArgument = num => 2 * num;

double(8);

//function no agruments, still leave empty parenthesis
const doubleSingleNoArgument = () => 2;

//double numbers in the array
const numbers = [1,2,3];

var doubled = numbers.map(function(number) {
	return number * 2;
});

doubled;

//compact version
numbers.map(number => 2 * number);

//this is undefined problem
//before
const team = { 
	members : ['jane', 'bill'],
  teamName: 'super squad',
  teamSummary: function() {
  	return this.members.map(function(member) { 
    	return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();

//the value of this is lost !!! what is the solution ?

//FAT ARROW => LEXICAL THIS
//The placement of the termchanges how it is interpretaded
const team = { 
	members : ['jane', 'bill'],
  teamName: 'super squad',
  teamSummary: function() {
    // this === team
  	return this.members.map((member) => { 
    	return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();

//fat arrow function solves this context problems

//exercice 1 : refactor with fat arrow
const n = 1;
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(3);

//exercice 1 : Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
//without fat arrow
const profile = {
    name: 'Alex',
  	getName: function(){
      return this.name;
    }
};

profile.getName();
//works
//with a fat arrow
const profile2 = {
    name: 'Alex',
  	getName: () => {
      return this.name;
    }
};

profile2.getName();

//does not work