const mailgun = require("mailgun-js");


const emailLinksToUser = (links, email) => {

const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
const data = {
	from: "Mailgun Sandbox <postmaster@sandboxe4d5af4775b14a9ca7dfd4fae78a8885.mailgun.org>",
	to: email,
	subject: "New Poll Creation",
	text: `Hello from the Polls Team!
  Here are your links that you can send to your friends (or anyone!) ${links.friendLink}
  and your link to view the poll results: ${links.resultsLink}`
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
};


module.exports = {emailLinksToUser}





