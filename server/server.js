const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//conexion heroku
const port = process.env.PORT || 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/simple.ripley.cl/api/v2/products/by-id/', function(req, res) {
    let body = req.body;
    if (body.productId == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: ' el ID del producto es requerido'
        });
    }


});

app.get('/simple.ripley.cl/api/v2/products/', function(req, res) {
    let body = req.body;
    if (body.partNumber == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: ' el partNumber del producto es requerido'
        });
    }
});

app.get('/simple.ripley.cl/api/v2/products', function(req, res) {
    let body = req.body;
    if (body.partNumbers == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: ' el partNumbers del producto es requerido'
        });
    }
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${ port }`);
});