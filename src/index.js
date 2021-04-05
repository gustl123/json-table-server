const express = require("express");
const http = express();

http.get("/multiple", function (req, res) {
  res.json([
  {
    number: 1,
    name: "John",
    gender: "male"
  },
  {
    number: 2,
    name: "Susann",
    gender: "female"
  }
  ]);
});

//create a server object:
http.listen(3000, function (req, res) {
  console.log("Server is running at port 3000");
});
