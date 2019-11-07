
//////////IMPORTS//////////
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//////////IMPORTS//////////

//////////STATIC FOLDERS//////////
app.use(express.json()); 
app.use(express.static( __dirname + '/public/dist/public' )); /////COMMENT OUT IF TESTING VIA POSTMAN
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
//////////STATIC FOLDERS////////// 

/////////////////////////ROUTES AND FUNCTIONS/////////////////////////////

require('./server/config/routes.js')(app)

/////////////////////////WHAT PORT TO HAVE THE SERVER ON/////////////////////////
app.listen(8000, () => console.log("listening on port 8000"));