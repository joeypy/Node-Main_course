const express = require('express');
const app = express();
const request = require('request');

let datos = request.get('https://jsonplaceholder.typicode.com/users');

app.get('/', (req, res) => {
    res.send(JSON.parse(datos));
});

app.listen(3000, () => {
    console.log('El servidor está funcionando en el puerto 3000');
});