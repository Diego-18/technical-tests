/*
ESPANOL:

Escribir un programa en JavaScript que recorra un arreglo y genere un histograma en base a los números de este. El arreglo se llama myArray y contiene 10 elementos que corresponden a números enteros del 1 al 5. Un histograma representa que tanto un elemento aparece en un conjunto de datos (Debe mostrar la frecuencia para todos los números del 1 al 5, incluso si no están presentes en el arreglo). Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería así:

1: *****
2: **
3: **
4:
5: *

El código para declarar y poblar myArray ya está ahí, puede editarlo para probar con otros valores y puede hacer clic en el botón de actualizar junto a él para volver al valor original que se utilizará para validar su código durante la prueba. Asegúrese de que los resultados se impriman exactamente como aparecen aquí, ya que incluso un espacio faltante o sobrante puede marcar la pregunta como incorrecta (Notar espacio entre los ":" y el primer asterisco).

*******************************************************************************

ENGLISH:

Write a JavaScript program that traverses an array and generates a histogram based on the numbers in the array. The array is called myArray and contains 10 elements corresponding to integers from 1 to 5. A histogram represents how much an element appears in a data set (it should show the frequency for all numbers from 1 to 5, even if they are not present in the array). For example, for the array: myArray:=(1,2,1,1,3,3,3,1,1,2,1,5,1) the histogram would look like this:

1: *****
2: **
3: **
4:
5: *

The code for declaring and populating myArray is already there, you can edit it to test with other values and you can click the refresh button next to it to return to the original value that will be used to validate your code during testing. Make sure that the results are printed exactly as they appear here, as even a missing or extra space can mark the question as incorrect (Note space between the ":" and the first asterisk).

Translated with www.DeepL.com/Translator (free version)

*/

var myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];
var histogram = "";
var i;

var histogram = "";
var i;

for (i = 1; i <= 5; i++) {
	var count = 0;

	for (var j = 0; j < myArray.length; j++) {
		if (myArray[j] === i) {
			count++;
		}
	}

	histogram += i + ": ";
	for (var k = 0; k < count; k++) {
		histogram += "*";
	}
	histogram += "\n";
}
console.log(histogram);

// console.log("Current directory: " + process.cwd());
