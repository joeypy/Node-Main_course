require('./config/config')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { response } = require('express');


app.use(bodyParser.urlencoded({ extended: false }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

// Llamar las rutas de usuario
app.use( require('./routes/usuario') );

// ################### Data Base #########################
mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, (error, response) => {
    if ( error ) throw error;
    console.log("Base de datos: ONLINE")
})

// ################### Run server #########################
app.listen( process.env.PORT , () => {
    console.log("Escuchando el puerto:", process.env.PORT);
});

