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
console.log(power(2,10))
