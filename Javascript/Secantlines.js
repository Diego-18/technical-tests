/*
Secant lines
Have the function IntersectingLines( strArr ) take strArr , which will be a 4 coordinate array in the form: (x,y). Your program should take these points where the first 2 form a line and the last 2 form a line, and determine if the lines intersect and, if they do, at what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"], then the line created by (3,0 ) and (1,4) and the line created by (0,-3) (2,3) intersect at (9/5,12/5). Therefore, your output must be the 2 points in fraction form in the following format: (9/5,12/5) . If there is no denominator for the resulting points, then the output should be just the integers like this: (12,3). If any of the resulting points are negative, add the negative sign to the numerator like this: (-491/63,-491/67) . If there is no intersection, your output should return the string "no intersection". The input points and the resulting points can be positive or negative integers.

Examples
Entrada: ["(9,-2)","(-2,9)","(3,4)","(10,11)"]
Output: (3,4)
Entrada: ["(1,2)","(3,4)","(-5,-6)","(-7,-8)"]
Output: no intersection

*/

function IntersectingLines(strArr) {
	// code goes here
	let xOne = parseInt(strArr[0].match(/(-?[0-9]+),/)[1]),
		xTwo = parseInt(strArr[1].match(/(-?[0-9]+),/)[1]),
		xThree = parseInt(strArr[2].match(/(-?[0-9]+),/)[1]),
		xFour = parseInt(strArr[3].match(/(-?[0-9]+),/)[1]),
		yOne = parseInt(strArr[0].match(/,(-?[0-9]+)/)[1]),
		yTwo = parseInt(strArr[1].match(/,(-?[0-9]+)/)[1]),
		yThree = parseInt(strArr[2].match(/,(-?[0-9]+)/)[1]),
		yFour = parseInt(strArr[3].match(/,(-?[0-9]+)/)[1]),
		denominator =
			(xOne - xTwo) * (yThree - yFour) - (yOne - yTwo) * (xThree - xFour),
		xNominator =
			(xOne * yTwo - yOne * xTwo) * (xThree - xFour) -
			(xOne - xTwo) * (xThree * yFour - yThree * xFour),
		yNominator =
			(xOne * yTwo - yOne * xTwo) * (yThree - yFour) -
			(yOne - yTwo) * (xThree * yFour - yThree * xFour),
		i,
		biggestX,
		biggestY,
		x,
		y;
	for (i = 1; i < Math.abs(denominator); i += 1) {
		if (Math.abs(xNominator) % i === 0 && Math.abs(denominator) % i === 0) {
			biggestX = i;
		}
	}
	for (i = 1; i < Math.abs(denominator); i += 1) {
		if (Math.abs(yNominator) % i === 0 && Math.abs(denominator) % i === 0) {
			biggestY = i;
		}
	}
	if (denominator < 0) {
		denominator *= -1;
		xNominator *= -1;
		yNominator *= -1;
	}
	x =
		xNominator % denominator === 0
			? xNominator / denominator
			: xNominator / biggestX + "/" + denominator / biggestX;
	y =
		yNominator % denominator === 0
			? yNominator / denominator
			: yNominator / biggestY + "/" + denominator / biggestY;

	return denominator === 0 ? "no intersection" : "(" + [x, y].join(",") + ")";
}

// keep this function call here
console.log(IntersectingLines(["(1,2)", "(3,4)", "(-5,-6)", "(-7,-8)"]));
