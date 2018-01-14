// filter helper (helps filtering lists)
//filter returns boolean natively

var products = [ 
  { name: 'cumcumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

var filteredProducts = [];

//don't forget the return statement
products.filter(function(product) {
			return product.type === 'fruit';
});

products;


var greens = [ 
  { name: 'cumcumber', type: 'vegetable', quantity: 10, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 0, price: 15 },
  { name: 'celery', type: 'vegetable', quantity:30, price: 5 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 2 },
];

// type is vegetable, quantity is greater than 0,
//price is less than 10 


greens.filter(function(green) {
  return green.type === 'vegetable' 
    && green.quantity > 0 
    && green.price < 10;  

});

// Filter related content

var post = { id: 4, title: 'New post' };

var comments = [ 
  { postId: 4, content: 'hello' },
  { postId: 3, content: 'bonjour' },
  { postId: 4, content: 'coucou' },
];

function commentsForpost(post, comments) {
    return comments.filter(function(comment) { 
          return comment.postId === post.id;
    }); 
}


commentsForpost(post, comments);

//exercice 1

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) { 
    return number > 50;
});



//exercice 2
//Filter the array of users, only returning users who 
//have admin level access.  
//Assign the result to the variable 'filteredUsers'. 
//Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) { 
    return user.admin;
});

//exercice 3
var numbers = [10, 20, 30];


function reject(array, iteratorFunction) {
    return array.filter(function(arr){
        return !iteratorFunction(arr);
    });
}

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 

lessThanFifteen;


