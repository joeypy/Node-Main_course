// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);}

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Joseph',
        id
    };

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BDD`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(20, (err, usuario) => {
    console.log('Usuario de base de datos ', usuario);
});