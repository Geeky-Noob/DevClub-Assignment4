const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
    // console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
    console.log(req.url.split("q=")[1]);
	const GUESS = req.url.split("q=")[1] ; // Write logic to parse the word which the user guessed from the URL string
    if (GUESS==SECRET){
        var ans = "You have Guessed word correctly"
    }else{
        var ans = "Sorry, Please try again"
    }
	const feedback = ans; // Write logic to compare the word with the secret, and generate the feedback string
	res.end(feedback);
}

http.createServer(myFunction).listen(8080);
