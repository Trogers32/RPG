

const controller = require("../controllers/controller.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/products', (req, res) => {
        controller.index(req,res);
    });
    app.post('/products', (req, res) => {
        controller.newProduct(req,res);
    });
    app.get('/products/:id', (req, res) => {
        controller.getProduct(req,res); 
    });
    app.put('/products/:id', (req, res) => {
        controller.upProduct(req,res);
    });
    app.delete('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}    