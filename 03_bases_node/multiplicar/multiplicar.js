const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite= 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al${limite}.txt`.green);
            }
        });
    });
};

let listarTablaMultiplicar = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`===== Tabla del ${base} =====`.green);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i * base}`);
    }
};


module.exports = {
    crearArchivo,
    listarTablaMultiplicar
};