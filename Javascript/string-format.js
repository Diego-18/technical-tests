/*
String Challenge
Have the function StringChallenge(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
Examples
Input: "cats AND*Dogs-are Awesome"
Output: catsAndDogsAreAwesome
Input: "a b c d-e-f%g"
Output: aBCDEFG
*/

function StringChallenge(str) { 
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// console.log(StringChallenge(readline()));

//Test Cases
console.log(StringChallenge("cats AND*Dogs-are Awesome"));
console.log(StringChallenge("a b c d-e-f%g"));
