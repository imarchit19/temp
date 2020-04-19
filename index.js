//jshint esversion:8
const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
var arr = [];
var num = 0;
//TODO
var options = {
  method: 'GET',
  url: 'https://cfw-takehome.developers.workers.dev/api/variants',
};
request(options, function (error, response, body) {
  if (error) throw new Error(error);
  p = JSON.parse(body);
  arr = p.variants;
});

app.get("/", function (req, res) {
  res.render("home.ejs", {
    arr: arr
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// addEventListener('fetch', event => {
//   event.respondWith(handleRequest(event.request))
// })
// /**
//  * Respond with hello worker text
//  * @param {Request} request
//  */
// async function handleRequest(request) {
//   return new Response('Hello worker!', {
//     headers: { 'content-type': 'text/plain' },
//   })
// }
