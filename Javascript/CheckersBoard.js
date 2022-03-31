/*
ESPANOL:
Imprimir un tablero de damas donde la "X" representa el color negro y el "_" representa el blanco. El tablero debe tener n x n casillas. Por ejemplo, para n=5 el tablero se vería así:

X_X_X
_X_X_
X_X_X
_X_X_
X_X_X

Tu tablero siempre debe partir con un cuadro negro (una "X") en la esquina superior izquierda y el valor de n puede ir de 1 a 10. En caso de que el valor de n sea diferente, asumir que n es igual a 5.

El código para el tamaño de n ya está ahí, puede editarlo para probar con otros valores y puede hacer clic en el botón de actualización junto a él para volver al valor original que se utiliza para validar su código durante la prueba. Tenga en cuenta que el código debe imprimir los resultados exactamente como se muestra con el fin de que la pregunta sea considerada válida durante la prueba.

********************************************************************************

ENGLISH:
Print a checkerboard where "X" represents black and "_" represents white. The board should have n x n squares. For example, for n=5 the board would look like this:

X_X_X
X_X_X_X
X_X_X_X
_X_X_X_ X_X_X_X_X_X_X_X_X_X_X
X_X_X_X

Your board should always start with a black square (an "X") in the upper left corner and the value of n can range from 1 to 10. In case the value of n is different, assume that n is equal to 5.

The code for the size of n is already there, you can edit it to test with other values and you can click the refresh button next to it to return to the original value used to validate your code during testing. Note that the code must print the results exactly as shown in order for the question to be considered valid during testing.

*/

let n = 5;

for (let i = 0; i < n; i++) {
	let line = "";
	for (let j = 0; j < n; j++) {
		if (i % 2 == 0) {
			if (j % 2 == 0) {
				line += "X";
			} else {
				line += "_";
			}
		} else {
			if (j % 2 == 0) {
				line += "_";
			} else {
				line += "X";
			}
		}
	}
	console.log(line);
}
