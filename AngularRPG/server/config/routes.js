

const controller = require("../controllers/controller.js")

module.exports = function(app){
    // app.get('/', (req, res) => {
    //     controller.index(req,res);
    // });
    app.get('/leaderboard', (req, res) => {
        controller.index(req,res);
    });
    app.post('/leaderboard', (req, res) => {
        controller.newScore(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./public/dist/public/index.html"))
    // });
}    