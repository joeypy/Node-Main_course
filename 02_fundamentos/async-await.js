/*
*    Async - Await
*/
/* Comandos: async() - await() - throw new Error('mensaje')*/



let getNombre = async() => {
    return 'Joseph';
};

// Esto es el equivalente al poner el 'async' de arriba
// *****************************************************
// let getNombre = () => {
//     return new Promise( ( resolve, reject ) => {
//         resolve('Joseph')
//     });
// };

getNombre()
    .then( nombre => {
        console.log(nombre);
    })
    .catch( err => console.log(err));   