const express = require("express");

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available// does not show in URL

// app.get(path, code);
// app.get(req, res, next) => {}

app.get("/", function (request, response, next) {
  console.log("command c to see the new message");
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/contact-page", (req, res, next) => {
  res.sendFile(__dirname + "/views/contact-page.html");
});

app.listen(3000, (req, res, next) => {
  console.log("server listening on port 3000...");
});
