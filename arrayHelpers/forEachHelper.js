
//array helpers

//foreach helper

var colors = [ 'red', 'blue', 'green' ];

 //iteration over an array

colors.forEach(function(color) {
      console.log(color);
});

var numbers = [ 1,2,3,4,5 ];

var sum = 0;

function adder(number) {
  sum += number;
}

//we can pass directly reference to the function
numbers.forEach(adder);

sum;
