/*
//English

Given two arrays of numbers, combine both arrays and arrange them in order from smallest to largest according to the indices of each array.

//Spanish
Dados dos arreglos de números, combinar ambos arreglos y ordenarlos de acuerdo de menor a mayor de acuerdo a los índices de cada arreglo.

Argumentos: Argumentos: [ [ 3, 4 ], [ 2, 6 ] ]
Resultado: [4,3,2,6]
*/

function fixMe(my_list) {
	let new_list = [];
	for (item of my_list) {
		for (element of item) {
			new_list.push(element);
		}
	}
	/*
    sorting hierarchy:
        1. desc by x%5
        2. desc by x
    */
	new_list.sort(function (y, x) {
		if (x % 5 === y % 5) {
			return x - y;
		} else {
			return (x % 5) - (y % 5);
		}
	});
	return new_list;
}

console.log(
	fixMe([
		[3, 4],
		[2, 6],
	])
);
