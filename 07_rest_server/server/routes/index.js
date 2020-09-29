const express = require('express');
const app = express();

// Llamar las rutas de usuario
app.use( require('./usuario') );
app.use( require('./login') );


module.exports = app;