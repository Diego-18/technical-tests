<?php

/*
PHP age count
In the PHP file, write a program to perform a GET request on the path https://coderbyte.com/api/challenges/json/age-counting that contains a data key and the value is a string containing elements in the format : key=String, age=ENTER . Your goal is to count how many elements exist that have an age equal to or greater than 50 and print this final value.

Example input
{ "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47"}

Output example
2
*/

$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

if(preg_match_all('/age=[5-9][0-9]/', $data, $matches)) {
    print count(current($matches));
}

?>
