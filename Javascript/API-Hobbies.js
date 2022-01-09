/*  

Back-end challenge
In the JavaScript file, write a program to perform a GET request in the path https://coderbyte.com/api/challenges/json/rest-get-simple 
and then print in the console the hobbies property in the following format: ITEM1 , ITEM2, ...

*/

const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
  
  let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    resp.on('end', () => {
        let json = JSON.parse(data);
        let hobbies = json.hobbies;

        let result = hobbies.join(', ');
        console.log(result);

        console.log(JSON.parse(data).hobbies);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
});