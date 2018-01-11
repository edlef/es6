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

