 var name='Christine';
 console.log(name);
 // alert(name);


// need to load jquery to make this work properly!
function update() {
	console.log('running update function');
	 	document.getElementById('foo').innerHTML = name;
} 
//update();


// alert('hello world');
function change() {
	document.getElementById('okay').innerHTML = 'hello world';
}


// a r r a y c e p t i o n aka multi-dimensional array
var toyotas = ['prius', 'highlander'];
var lexus = ['nice', 'nicer'];

var cars =[toyotas, lexus];


// this is a cleaner way to write it 
//var foo = [['foo, bar'], ['steve', 'mark']];


// exercies!
var num1 = 10;
var num2 = 15;
var result = num1 + num2;
console.log("Result: " + result);


var firstName = "Lil ";
var lastName ="Wayne";
var result = firstName + lastName;
//alert(result + " is a small man with a big voice.");


var foods = ['pizza', 'sushi', 'burritos'];
var drinks = ['coffee', 'cider', 'fizzy water'];
var likes = [foods, drinks];
console.log("i like: " + likes[0][1] + ' and ' + likes[1][2]);

// for grouping output into one place
console.group('these are my results');
	console.log(result);
	console.log(result);
	console.log(result);
	console.log(result);
console.groupEnd();



// FOR LOOPS AND FUNCTIONS ETC :)
if (11>10) {
	console.log("of course it is!");
}

if (5>10) {
	console.log('here we are');
} else {
	console.log('inside of the else statement');
}

var x = 15;
if (x < 10) {
	alert('your variable is less than 10!');
} else {
	console.log("sorry, " + x + " is not less than 10.");
}

var x = 15;
if (x < 10) {
	alert('your variable is less than 10!');
} else if (x > 10) {     
	console.log("sorry, " + x + " is not less than 10.");
} else {                                // else ALWAYS comes last
	alert("whaaaaa?");
}


function addNum(num1, num2){
	return num1 + num2;
}
console.log(addNum(10, 10));
console.log(addNum(10, 10) + 400);
console.log(addNum(10, 10) - 15);


function addNum(num1, num2, num3, num4){
	if (num3) {
		return num1 + num2 + num3;
	} else {
		return num1 + num2;
	}	
}
console.log(addNum(10, 10));
console.log(addNum(10, 10) + 400);
console.log(addNum(10, 10) - 15);


for (var i =0; i<=10; i++){
	console.log(i);
}

var x = ['1', '2', '3', 'f', 'sss'];
for (var i =0; i < x.length; i++){
	console.log(i);
}

var beers = ['lagers', 'ales', 'other'];
for (var i=0; i < beers.length; i++){
	console.log(beers[i]); // passing a # will give you a specific one three times, passing i will itterate all three
}


var colors = ['yellow', 'blue', 'purple'];
var animals = ['dogs', 'cats', 'squirrels'];
var combo = [colors, animals];
for (var i=0; i < combo[0].length; i++){
	console.log(combo[0][i]);
}
for (var i=0; i < combo[1].length; i++){
	console.log(combo[1][i]);
}

x = 0;    //setting x greater than 10 will result in it not running
while(x < 10){
	console.log('foo');
	x++;
}
 var x = 99;
 while(x > 0){
 	console.log( x + " bottles of beer on the wall, " +x+ " bottles of beer")
 	x--;
 }





