//Object literals
//improve object literals with es6

//es5 example

function createBookShop(inventory) { 
	return { 
  	inventory: inventory,
    inventoryValue : function() {
      
    },
    priceForTitle: function() {
    	
    	
    }
  };
}

const inventory = [ 
  { title: 'harry potter', price: 10 },
  { title: 'javascript es6', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop;