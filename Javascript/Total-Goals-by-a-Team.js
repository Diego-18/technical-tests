/*
1. REST API: Total Goals by a Team
In this challenge, the REST API contains information about football matches. The provided API allows querying matches by teams and year. Your task is to get the total number of goals scored by a given team in a given year.

To access a collection of matches, perform GET requests to
https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>
https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>
where <year> is the year of the competition, <team> is the name of the team, and <page> is the page of the results to request. The results might be divided into several pages. Pages are numbered from 1.
Notice that the above two URLs are different. The first URL specifies the team1 parameter (denoting the home team) while the second URL specifies the team2 parameter (denoting the visiting team). Thus, in order to get all matches that a particular team played in, you need to retrieve matches where the team was the home team and the visiting team.

For example, a GET request to
https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona&page=2
returns data associated with matches in the year 2011, where team1 (the home team) was Barcelona, on the second page of the results.

Similarly, a GET request to
https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona&page=1
returns data associated with matches in the year 2011 where team2 (the visiting team) was Barcelona, on the first page of the results.

The response to such a request is a JSON with the following 5 fields:

page: The current page of the results.
per_page: The maximum number of matches returned per page.
total: The total number of matches on all pages of the results.
total_pages: The total number of pages with results.
data: An array of objects containing matches information on the requested page.

Each match record has several fields, but in this task only the following 4 are relevant:

team1: a string denoting the name of the first team in the match
team2: a string denoting the name of the second team in the match
team1goals: a string denoting the number of goals scored by team1 in the match
team2goals: a string denoting the number of goals scored by team2 in the match

Function Description

Complete the function getTotalGoals in the editor below.

getTotalGoals has the following parameters:
    string team: the name of the team
    int year: the year of the competition
The function must return an integer denoting the total number of goals scored by the given team in all matches in the given year that the team played in.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */
async function getTotalGoals(team, year) {
    fetch('https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1')
        .then(response => response.json())
        .then(data => {
            const totalGoals = data.data.reduce((acc, match) => {
                return acc + parseInt(match.team1goals);
            }, 0);
        });
        
        return totalGoals;
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const team = readLine();
    const year = parseInt(readLine().trim(), 10);
    const result = await getTotalGoals(team, year);

    ws.write(result + '\n');
    ws.end();
}