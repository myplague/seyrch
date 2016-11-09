const express = require('express');
const app = express();
const Yelp = require('yelp');
const OAuth = require("oauth");
const YELP_KEY = "bMoiQT7XuLt8bz61R6KkeA";
const YELP_SECRET = "CCmAqq7bq6JP0EHNH_-H7Cvtvnw";
const YELP_TOKEN = "QOCGK9hYtfM4vLZU_b-Cr0-Vm_IXk5yX"
const YELP_TOKENSECRET = "zLX63Act4e31-lsGBEIpMbydXsk";
// const cors = require(`cors`);

// app.use(cors());

//
app.get("/", function(req,res){
  console.log("received request");
  res.sendFile(__dirname + "/webpage/index.html");
  //to generate a random number, the code would be:
    // res.send("" + Math.floor(Math.random()*9));
});
app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/webpage/css/style.css');
});

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
app.get("/seyrch/:city/:term/", function (req, res) {
  var yelp = new Yelp({
  consumer_key: YELP_KEY,
  consumer_secret: YELP_SECRET,
  token: YELP_TOKEN,
  token_secret: YELP_TOKENSECRET,
  });
  yelp.search({ term: req.params.term, location: req.params.city })
  .then(function (data) {
    console.log(JSON.stringify(data,null, 2));
    res.json(data);
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
