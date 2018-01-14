//every and sum helpers

//before
var computers = [ 
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 32 },
  { name: 'Acer', ram: 4 }
];

//I need at least 16 ram to run a program, 
// do i have at least one computer able to run it (that is why we don't use filter helper).

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
 	var computer = computers[i];
  
  if (computer.ram < 16) {
   	allComputersCanRunProgram = false 
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}
"---"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

"***"
//after
//the helper performs an "AND" with all boolean results and combines in a single bool

computers.every(function(computer) { 
		return computer.ram > 16;
});

//if every elements of te iterator returns true it returns true

//The some helper performs "OR" on all results, if at least one element is true it returns true
// do some objects meet requirements ?

computers.some(function(computer) { 
		return computer.ram > 16;
});


var names = [ 
  "edlef",
  "tom",
  "jj"
];

//find all names with at least 4 chars

names.every(function(name) { 
		return name.length > 4;
});

names.some(function(name) { 
		return name.length > 4;
});

//practical exemple : login form
//Imagine we want to validate the inputs before submit


function Field(value) { 
		this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");

//bad -> use every helper
username.validate() && password.validate();

var fields = [ username, password];

var formIsValid = fields.every(function(field) { 
		return field.validate();
});

if (formIsValid) {
  //allow submission
} else {
 //show an error 
}

//exercice 1
//Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) { 
	return user.hasSubmitted;

});

//exercice 2
//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.var requests = [
var requests = [  
	{ url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) { 
		return request.status === 'pending';
});



