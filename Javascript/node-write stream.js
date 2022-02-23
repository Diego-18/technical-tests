/*Node.js Write Stream
In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

Example Input
{"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"}

Example Output
7caa78c7180ea52e5193d2b4c22e5e8a9e03b486

*/
const https = require("https");
const fs = require("fs");
const file = fs.createWriteStream("./output.txt");
var crypto = require("crypto");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
	let data = "";
	// parse json data here...
	let body = "";

	resp.on("data", (chunk) => {
		body += chunk;
	});

	resp.on("end", () => {
		try {
			let json = JSON.parse(body);

			let matchedData = json.data
				.split("key=")
				.filter((data) => data.includes(" age=32"))
				.map((data) => data.replace(", age=32,", ""));
			matchedData.map((data) => file.write(data.trim() + "\n"));
			file.end();
			var fd = fs.createReadStream("./output.txt");
			var hash = crypto.createHash("sha1");
			hash.setEncoding("hex");

			fd.on("end", function () {
				hash.end();
				console.log(hash.read());
			});
			fd.pipe(hash);
		} catch (error) {
			console.error(error.message);
		}
	});
});
