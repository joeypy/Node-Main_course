const argv = require('yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crea una tarea a realizar');
        break;
    case 'listar':
        console.log('Lista las tareas por realizar');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea a realizar');
        break;
    default:
        console.log(`El comando '${comando}' no es un comando conocido.`);
}