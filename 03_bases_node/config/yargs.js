let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand: false,
        default: 10
    }
};


const argv = require('yargs')
    .command('list', 'Imprime en pantalla la tabla de multiplicar solicitada', opts)
    .command('create', 'Crea un archivo con la tabla de multiplicar ingresada', opts)
    .help()
    .argv;

module.exports = {
    argv
};