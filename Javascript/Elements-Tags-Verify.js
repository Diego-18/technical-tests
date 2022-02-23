/*
Elements HTML
Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.

Examples
Input: "<div><div><b></b></div></p>"
Output: div
Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
Output: i
*/

function HTMLElements(str) {
	// code goes here
	let openingTags = str.match(/<\w+>/g);
	let closingTags = str.match(/(<\/\w+>)/g);
	let sin_par = [];

	for (const ciclo_1 in openingTags) {
		tiene_par = false;
		for (ciclo_2 in closingTags) {
			if (
				openingTags[ciclo_1] === closingTags[ciclo_2].replace("/", "")
			) {
				closingTags.splice(ciclo_2, 1);
				tiene_par = true;
			}
		}

		if (tiene_par == false) {
			sin_par.push(openingTags[ciclo_1].replace(/<|>/g, ""));
		}
	}
	longitud = sin_par.length;
	return longitud > 0 ? sin_par[0] : true;

	return str;
}

// keep this function call here
console.log(HTMLElements("<di><p>Test de Coderbyte<i></p></di>"));
