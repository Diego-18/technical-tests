/*  
Given an object with a number of users and their ids, 
perform a function that allows to return the name of 
the user to which it belongs passing as a parameter 
the value of the same within the object.

Example: 
Input: 975
Output: pedro

Input: 1234
Output: maria

Input: 5346
Output: juan
*/

data = {
    maria: 1234,
    pedro: 975,
    juan: 5346
}

const users = Object.entries(data);

function searchUsers(id) {
    const user = users.find(function(user) {
        if(user[1] === id) {
            console.log(user[0]);
        }
    });
}

searchUsers(975);
searchUsers(5346);
searchUsers(1234);