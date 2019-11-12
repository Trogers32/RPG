
const mongoose = require('mongoose');


//////////////init DB//////////////
mongoose.connect('mongodb://localhost/Score_DB', {useNewUrlParser: true});
const ScoreSchema = new mongoose.Schema({ /////////Scores///////////
    userName: {type: String},
    score: {type: Number},
},{timestamps:true})
   // create an object to that contains methods for mongoose to interface with MongoDB
const Score = mongoose.model('Score', ScoreSchema);
//////////////init DB//////////////

///////EXPORT////////
module.exports = Score;
// ^(-?\d+\.\d+)$|^(-?\d+)$