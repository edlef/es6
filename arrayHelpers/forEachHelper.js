
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

//Exercise 1 : refactor

//before
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

//after

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post) { 
 				savePost(post);   
    });
}


//exercice 2 calculate area

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
  areas.push(calcArea(image));
  
});

function calcArea(image) {

      return image.height*image.width;
};