/*Histogram area
Have the HistogramArea( arr ) function read the array of non-negative integers stored in arr that will represent the heights of the bars in a graph (where the width of each bar is 1) and determine the largest area under the entire bar graph. For example: if arr is [2, 1, 3, 3, 4, 1] then this looks like the following bar chart:

You can see in the above bar chart that the largest area below the chart is covered by the x's. The area of that space is equal to 6 because the total width is 2 and the maximum height is 3, so 2 * 3 = 6. Your program should return 6 . The matrix will always contain at least 1 element.

Examples
Input: [6, 3, 1, 4, 12, 4].
Output: 12
Input: [5, 6, 7, 4, 1] Output: 16.
Output: 16
*/

function HistogramArea(arr) {
	// code goes here
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		let blocks = [arr[i]];
		result = arr[i] > result ? arr[i] : result;
		for (let j = 1 + i; j < arr.length; j++) {
			blocks.push(arr[j]);
			const area = Math.min(...blocks) * blocks.length;
			result = area > result ? area : result;
		}
	}
	// code goes here
	return result;
}

// keep this function call here
console.log(HistogramArea([6, 3, 1, 4, 12, 4]));
