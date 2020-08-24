const description = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completed = {
    default: true,
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completed
    })
    .command('borrar', 'Borra una tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
};