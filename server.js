const express = require('express');
const app = express();
const Yelp = require('yelp');
const OAuth = require("oauth");
const YELP_KEY = "DrSxFHaExEG7JnvfplXKWA";
const YELP_SECRET = "0OHyGS6twi3SrQboaY26tHJGlr4";
const YELP_TOKEN = "BOTZhZwJEH0V05sK8Isu3VGpTGsSjpG8"
const YELP_TOKENSECRET = "uLHRQlxpAUadPG1O3Tidssd43Xo";
// const cors = require(`cors`);

// app.use(cors());

//
app.get("/", function(req,res){
  console.log("received request");
  res.send("Hello World");
  //to generate a random number, the code would be:
    // res.send("" + Math.floor(Math.random()*9));
})

app.get("/random/:start/:end", function(req,res){
  var start = req.params.start;
  var end = req.params.end;
  var total = Math.floor(Math.random()*(end-start) + start);
  res.send("" + total);
});

app.get("/getsushiinmiami", function(req, res){
  var yelp = new Yelp({
  consumer_key: YELP_KEY,
  consumer_secret: YELP_SECRET,
  token: YELP_TOKEN,
  token_secret: YELP_TOKENSECRET,
});
yelp.search({ term: 'sushi', location: 'Miami, FL' })
.then(function (data) {
  console.log(JSON.stringify(data,null, 2));
  res.json(data);
})
.catch(function (err) {
  console.error(err);
  res.send(error);
});
});
 // app.get("/laughing", function(req,res){
//   res.send("hahahahhaha");
// });
//
// app.get("/ransom", function(req, res){
//   res.send("we have your mother.");
// })
//
// app.get("/randomnumbers50and75", function(req,res){
//   res.send("" + Math.floor(Math.random()*25+50));
// })

app.listen(3000, function() {
  console.log("server listening on port 3000");
});
