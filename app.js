"use strict";

const express = require('express');
const app = express();

//app.METHOD(path, handler)
app.get('/', function(request, response){ //often req and res //this is saying: hey express, listen for a get request at this path (/), if you get one, run this function.
  response.send("hello world");
});

app.listen(3000, function(){
  console.log("Listening on port 3000. Go to http://localhost:3000/");
});
