const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	let feedback = "";
	if (req.url.includes('wordle?q=')){
		const GUESS = req.url.split('?q=')[1]; // Write logic to parse the word which the user guessed from the URL string
		for(let i = 0 ; i < 5; i ++){
			if (GUESS[i] == SECRET[i]){
				feedback += 'g';
			}else if(SECRET.includes(GUESS[i])){
				feedback += 'y';
			}else{
				feedback += 'b';
			}
		}
	}else{
		feedback = "ERROR, please enter url in correct format /wordle?q=<word>"
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
