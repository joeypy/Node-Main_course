const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();

const { verificaToken, verificaAdminRole } = require('../middlewares/autenticacion');

// ################### Routes ###########################
// GET
app.get('/usuario', verificaToken, (request, response) => {

    let desde = Number(request.query.desde || 0);
    let limite = Number(request.query.limite || 5);

    let condicion = {
        estado: true
    };

    Usuario.find( condicion, 'nombre email role estado google img')
            .skip(desde)
            .limit(limite)
            .exec( (err, usuarios) => {
                if(err) {
                    return response.status(400).json({
                        ok: false,
                        err
                    })
                };

                Usuario.countDocuments( condicion, (err, conteo) => {
                    response.json({
                        ok: true,
                        usuarios,
                        cantidad: conteo
                    });
                });
                
            });

});


// POST
app.post('/usuario', [verificaToken, verificaAdminRole], (request, response) => {
    let body = request.body

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync( body.password, 10 ),
        role: body.role
    });

    usuario.save( (err, usuarioDB) => {
        if(err) {
            return response.status(400).json({
                ok: false,
                err
            });
        };
        
        // usuarioDB.password = null;                                  // evitar que el password se envíe en la resp
        response.json({
            ok: true,
            usuario: usuarioDB
        });
    });
    
});


// PUT
app.put('/usuario/:id', [verificaToken, verificaAdminRole], (request, response) => {
    let id = request.params.id;
    let body = _.pick(request.body, ['nombre', 'email', 'role', 'estado', 'img']) ;

    delete body.google
    delete body.password

    Usuario.findByIdAndUpdate( id, body, { new: true, runValidators: true },(err, usuarioDB) => {
        if(err) {
            return response.status(400).json({
                ok: false,
                err
            });
        };
        response.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});


// DELETE
app.delete('/usuario/:id', [verificaToken, verificaAdminRole], (request, response) => {
    let id = request.params.id;

    let borrarUsuario = {
        estado: false
    }
    
    // Usuario.findByIdAndRemove()
    Usuario.findByIdAndUpdate(id, borrarUsuario, { new: true }, (err, usuarioBorrado) => {
        if(err) {
            return response.status(400).json({
                ok: false,
                err
            })
        }
        if(!usuarioBorrado) {
            return response.status(400).json({
                ok: false,
                error: {
                    message: "Usuario no encontrado."
                } 
            });
        };
        response.json({
            ok: true,
            usuario: usuarioBorrado
        });
    })
    
});


// ###########################################################
// Exports
// ###########################################################

module.exports = app;