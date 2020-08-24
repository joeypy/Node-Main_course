const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo grabar', err);
    });
};

const CargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (description) => {

    CargarDB();
    let porHacer = {
        description,
        completed: false
    };
    listadoPorHacer.push( porHacer );
    guardarDB();
    return porHacer;
};

const getListado = () => {
    CargarDB();
    return listadoPorHacer;
};

const actualizar = (description, completed = true ) => {
    CargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.description === description;
    });
    if( index >= 0) {
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    }else{
        return false;
    }
};

const borrar = (description) => {
    CargarDB();
    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.description !== description;
    });
    if( listadoPorHacer.length === nuevoListado.length ) {
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};