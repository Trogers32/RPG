

const Score = require("../models/model.js");
//////////IMPORTS//////////
const express = require("express");
const app = express();
//////////IMPORTS//////////
//////////STATIC FOLDERS//////////
app.use(express.json()); 
//////////STATIC FOLDERS////////// 

module.exports = {
    index: function(req, res) {
        Score.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    newScore: function(req, res) { //////add new Score
        Score.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
};






