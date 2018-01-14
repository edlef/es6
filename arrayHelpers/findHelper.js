//find helper

var users = [ 
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Edlef'}
];

//once we find an element stop looping (less ressources)

var user = users.find(function(user) {
		return user.name === 'Edlef'; 
});
                      
user;

//drawback -> if there is 2 elements in the array returning true,
//you only get the first

function Car(model) {
	this.model = model;
};

var cars = [
   new Car('Buick'),
   new Car('Twingo'),
   new Car('Lada')
];

cars.find(function(car) { 
	return car.model === 'Lada';
});


//More complex
var posts = [ 
  { id: 1, title: "new" },
  { id: 2, title: "old" },
];

var comment = { postId: 1, content: 'great' };

function postForComment(posts, comment) { 
			return posts.find(function(post) { 
      		return post.id === comment.postId;
      });
};

postForComment(posts, comment);


//exercice 1
// find the user admin

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) { 
		return user.admin;

});

//exercice 2 : Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
	return account.balance === 12;
});


//exercice 3 : refactor

var ladders = [
  { height : '10 feet' },
  { height : '20 feet' },
];

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];
  return array.find(function(arr) {
  	return arr[property] === criteria[property];		
  });
}

findWhere(ladders, { height: '20 feet' });


