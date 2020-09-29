const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{PATH} no es un rol válido.'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es obligatoria.']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatoria.']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

// Función para no enviar el campo password en el response
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

// Validación de campos únicos
usuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser único.'} );


module.exports = mongoose.model( 'Usuario', usuarioSchema );
