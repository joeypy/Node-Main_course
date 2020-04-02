// function sumar(a, b) {
//     return a + b;
// }

// primera manera 
// let sumar = (a, b) => {
//     return a + b;
// };
// Segunda forma
let sumar = (a, b) => a + b;

console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola mundo';
// }
// let saludar = () => 'Hola mundo';
let saludar = (nombre) => `Hola ${nombre} `;

console.log(saludar('Joey'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());