//the map helper

//avoid mutating (changing data) wh//erever possible
var numbers = [ 1,2,3 ];
var doubledNumbers = [];

numbers.forEach(function(number) {
  doubledNumbers.push(number*2);
});

//refactor
//we are not mutating the existing array 
//return is critical here

//we are producing a new one instead
var doubled = numbers.map(function(number) {
	return number * 2;
});

//always use return in a mapping function

// more complexe example
var cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camero', price : 'expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;

//exercice 1
//Using map, create a new array that 
//contains the 'height' property of 
//each object.  Assign this new array 
//to the variable 'heights'.  
//Don't forget to use the 'return'
//keyword in the function!

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) { 
	return image.height;

});

//calculating values with map Using map, 
//create a new array that contains the 
//distance / time value from each trip.  
//In other words, the new array should 
//contain the (distance / time) value.  
//Assign the result to the variable 'speeds'.


var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) { 
	return trip.distance / trip.time;

});

speeds;


//create a pluck function where you can pass an array an a string representing an object property return an array with object properties
var paints = [ { color: 'red' }, 
              { color: 'blue' }, 
              { color: 'yellow' },
];



function pluck(array, property) {
		return array.map(function(color) {
      return color[property];
    });
};


var paintColors = pluck(paints, 'color');

paintColors;












