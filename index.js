//Basic functions 
const makeNoise = function() {
	console.log("ping!");
};
makeNoise();



const power = function(base, exp) {
	let result = 1; 
	for (let count = 0; count < exp; count++) {
		result *= base;
	}
	return result;
};
console.log(power(2,10));

// Bindings and scope 
let x = 10;

if (true) {
    let y = 20;
    var z = 30;
    // x is visible inside the block as each scope can look out into the scope around it. 
    console.log( x + y + z);
}

// y is not visible here as it's scope is local to the block.
// z is declared with var and so is a global variable.
console.log( x + z );

// Multiple bindings with the same name
let n = 10;

const halve = function(n) {
   return n / 2;
};

console.log(halve(100));
console.log(n);