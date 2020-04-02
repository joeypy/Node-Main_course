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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salariosDB = salarios.find(salario => salario.id === empleado.id);

    if (!salariosDB) {
        callback(`No se encontró un salario para el usuario o empleado ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariosDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        
        console.log(`El salario de ${ resp.nombre }, es de ${ resp.salario }`);
    
    });
});

