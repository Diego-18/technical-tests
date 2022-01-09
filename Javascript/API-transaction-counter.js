/**

Implement a function getNumTransactions(). It takes a username and it returns either 
the number of transactions associated with username, or a string "Username Not Found" 
if no such user exists. Make a GET request to the given REST APIs that contain information about a user.
 
Given a user name, the user details should be fetched by making a GET call to the API https://jsonmock.hackerrank.com/api/article_users?username=<username> 
where <username> is the parameter passed to the getNumTransactions function. 
 
The response will be a JSON object with the following 5 fields:

page: The current page of the results. (Number)
per_page: The maximum number of results returned per page. (Number)
total: The total number of results. (Number)
total_pages: The total number of pages with results. (Number)
data: Either an empty array or an array with a single object containing the user details record with the following schema:
id - user id (Number)
username - user name as passed above (String)
    
This object has other fields as well but they are not needed for this question.
If the username passed to the request does not exist in the system, the data array will be empty. 
In that case, the function should return "Username Not Found".

An example of a user record is as follows:

{
    "id": 1,
    "username": "epaga"
}

If the user details is successfully fetched from the first API, use the id property of the details object to fetch the transactions information for the user. The API to fetch this is https://jsonmock.hackerrank.com/api/transactions?&userId=<userId> 
where <userId> is the id property fetched earlier.

The response will be a JSON object with the following 5 fields:

page: The current page of the results. (Number)
per_page: The maximum number of results returned per page. (Number)
total: The total number of transactions for the given user id. (Number)
total_pages: The total number of pages with results. (Number)
data: Either an empty array or an array with transaction records of the user.

Here total is the total number of transactions of the user and is the final value to be returned by the function.
* 
*/

'use strict';

const fs = require('fs');
const https = require('https');

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

async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    const userDetails = await getUserDetails(username);
    if (userDetails.data.length === 0) {
        return 'Username Not Found';
    }
    const userId = userDetails.data[0].id;
    const transactions = await getTransactions(userId);
    return transactions.total;

}

async function getUserDetails(username) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'jsonmock.hackerrank.com',
            port: 443,
            path: `/api/article_users?username=${username}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const req = https.request(options, (res) => {  // eslint-disable-line
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });
        req.on('error', (e) => {
            reject(e);
        });
        req.end();
    });
}


async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}