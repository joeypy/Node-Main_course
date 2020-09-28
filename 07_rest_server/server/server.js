require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json


// ################### Methods ###########################
// GET
app.get('/usuario', (request, response) => {
    response.json("get Usuario");
});

// POST
app.post('/usuario', (request, response) => {
    let body = request.body
    if ( body.nombre === undefined ){
        response.status(400).json({
            ok: false,
            msg: "El nombre es necesario."
        });
    }else {
        response.json({
            persona: body
        });
    };
});

// PUT
app.put('/usuario/:id', (request, response) => {
    let id = request.params.id;
    response.json({
        id
    });
});

// DELETE
app.delete('/usuario', (request, response) => {
    response.json("delete Usuario")
});

// ################### Run server #########################
app.listen( process.env.PORT , () => {
    console.log("Escuchando el puerto:", process.env.PORT);
});

