
let empleados = [{
    id: 1,
    nombre: 'Joseph'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Alice'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = async (id) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el ID ${ id }`);
        } else {
            return empleadoDB;
        }
};

let getSalario = async (empleado) => {
    
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if (!salarioDB) {
            throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
        }
};

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);
    return `${respuesta.nombre} tiene un salario de ${respuesta.salario}$`;
};

getInformacion(2)
    .then( mensaje => console.log(mensaje) )
    .catch( e => console.log(e) );