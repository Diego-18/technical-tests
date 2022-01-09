/**
 * 
 * It searches for the value in the data array in the inclusive range [minRange - maxRange]
 * using 0-based indexing.  If value is found in the given range, it returns true.  Otherwise it returns false.
 * 
 * If minRange or maxRange is beyond an end of the array, throws an Error object with the message of 'Invalid range'.
 *  
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

function dataFinder(data) {
    return (minRange, maxRange, value) => {
        if (minRange < 0 || maxRange > data.length - 1) {
            throw new Error('Invalid range');
        }
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
                return true;
            }
        }
        return false;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const data = readLine().trim().split(' ');
    const finalData = data.map(val => parseInt(val));
    const join = dataFinder(finalData);
    try {
        const inputs = readLine().trim().split(' ');
        const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
        ws.write(result.toString());
    } catch(e) {
        ws.write(`${e}`);
    }
    ws.end();
}