/*
ESPANOL:

Tienes un arreglo (llamado myArray) con 10 elementos (enteros en el rango de 1 a 9). Escribe un programa que imprima el número que tiene más ocurrencias seguidas en el arreglo y también imprimir la cantidad de veces que aparece en la secuencia.

El código que llena el arreglo ya está escrito, pero puedes editarlo para probar con otros valores. Con el botón de refrescar puedes recuperar el valor original que será utilizado para evaluar la pregunta como correcta o incorrecta durante la ejecución.

Su programa escrito en JavaScript debe analizar el arreglo de izquierda a derecha para que en caso de que dos números cumplan la condición, el que aparece por primera vez de izquierda a derecha será el que se imprima. La salida de los datos para el arreglo en el ejemplo (1,2,2,5,4,6,7,8,8,8) sería la siguiente:
Longest: 3
Number: 8

En el ejemplo, la secuencia más larga la tiene el número 8 con una secuencia de tres ochos seguidos. Tenga en cuenta que el código que escriba debe imprimir los resultados exactamente como se muestra con el fin de que la pregunta sea considerada válida.

El código para declarar y poblar myArray ya está ahí, puede editarlo para probar con otros valores y puede hacer clic en el botón de actualizar junto a él para volver al valor original que se utilizará para validar su código durante la prueba.

************************************************************************

INGLES:

You have an array (called myArray) with 10 elements (integers in the range 1 to 9). Write a program that prints the number that has the most occurrences in a row in the array and also prints the number of times it appears in the sequence.

The code that fills the array is already written, but you can edit it to try other values. With the refresh button you can retrieve the original value that will be used to evaluate the question as correct or incorrect during execution.

Your program written in JavaScript should parse the array from left to right so that in case two numbers meet the condition, the one that appears first from left to right will be the one that is printed. The data output for the array in the example (1,2,2,5,4,6,7,7,8,8,8,8) would be as follows:
Longest: 3
Number: 8

In the example, the longest sequence is number 8 with a sequence of three eights in a row. Note that the code you write must print the results exactly as shown in order for the query to be considered valid.

The code to declare and populate myArray is already there, you can edit it to test with other values and you can click the refresh button next to it to return to the original value that will be used to validate your code during the test.

*/

let myArray = [1, 2, 2, 4, 5, 6, 7, 8, 8, 8];

let longest = 0;
let number = 0;

for (let i = 0; i < myArray.length; i++) {
	let count = 0;
	for (let j = i; j < myArray.length; j++) {
		if (myArray[i] == myArray[j]) {
			count++;
		}
	}
	if (count > longest) {
		longest = count;
		number = myArray[i];
	}
}

console.log("Longest: " + longest);
console.log("Number: " + number);
