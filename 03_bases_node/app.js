const argv  = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTablaMultiplicar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'list':
        listarTablaMultiplicar(argv.base, argv.limit);
        break;
    case 'create':
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}  


