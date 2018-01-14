//reduce helper
//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.var requests = [
var numbers = [ 10, 20, 30 ];
var sum = 0;

// i want to sum all the numbers of this array
// first argument is initial value

numbers.reduce(function(sum, number) { 
	return sum + number;
},0);

//condensing whole collection of elements into single value

//we want to take all the strings and store it in an array
var primaryColors = [ 
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
];

//previous (or accumulator) stands for the previous value when we last went trought this loop
primaryColors.reduce(function(previous, primaryColor) { 
  previous.push(primaryColor.color);
  return previous;
}, []);

//practical use cases of reduce (not only to sum number !!!)
//find if parenthesis are balanced

function balancedParens(string) {
 return !string.split("").reduce(function(previous, char) { 
 	if( previous < 0) { return previous; }
  if (char === '(') { previous ++;} 
  if (char === ')') { previous --;}
  return previous;
 },0);
}
balancedParens("))))(");

//exercice 1 : get total distance
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip) {
				return previous += trip.distance;
},0);

//exercice 2 : create an object with total standing and sitting desks
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'couching' }
];

var deskTypes = desks.reduce(function(accumulator, desk) {
    if (desk.type === 'sitting') {
    	accumulator.sitting++;
    }	
  	if (desk.type === 'standing') { 
    	accumulator.standing++;
    }
  
  	return accumulator;
  
}, { sitting: 0, standing: 0 });

deskTypes;

//exercice 3 :  Write a function called 'unique' that will remove all the duplicate values from an array.

var numbers = [1, 1, 2, 3, 4, 4, 5, 5];

function unique(array) {
  return array.reduce(function(previous, element) { 		
    var duplicate = previous.find(function(prev) {   
      
     return prev === element;  
    });   
    if (!duplicate) {
     previous.push(element);
    }
  
  	return previous;
    
  }, []);
}

unique(numbers);