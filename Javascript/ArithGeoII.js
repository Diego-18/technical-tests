/*
Arith Geo II

Have the function ArithGeoII( arr ) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence does not follow any pattern, return -1 . An arithmetic sequence is one in which the difference between each of the numbers is consistent, while in a geometric sequence, each term after the first is multiplied by a constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers can be entered as parameters, 0 will not be entered and no matrix will contain all the same elements.
*/

function ArithGeoII(arr) {
	// code goes here
	let sum = arr[arr.length - 1];
	let geom = true;
	let difference = arr[arr.length - 1] - arr[arr.length - 2];
	for (let i = arr.length - 1; i > 0; i--) {
		if (arr[i] % arr[i - 1] !== 0) {
			geom = false;
		}
		sum -= difference;
	}
	if (sum === arr[0]) {
		return "Arithmetic";
	} else if (geom === true) {
		return "Geometric";
	}
	return -1;
}

// keep this function call here
console.log(ArithGeoII([2, 4, 6, 8]));
console.log(ArithGeoII([2, 6, 18, 54]));
