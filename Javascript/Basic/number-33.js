/*
Given two integers, determine if you can construct the lucky number 33. 
If so, return the boolean true, else return false.

You can construct the lucky number 33 if:

1 - One of the two numbers is the number 33 itself
2 - Adding the two numbers results in 33
3 - Subtracting one number from the other results in 33

*/

export function lucky_33(a,b){
    if(a == 33 || b == 33){
        return true;
    }
    if(a + b == 33){
        return true;
    }
    if(a - b == 33){
        return true;
    }
    return false;
}