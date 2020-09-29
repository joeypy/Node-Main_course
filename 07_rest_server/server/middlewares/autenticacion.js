const jwt = require('jsonwebtoken')

// =============================================================
// Verificar Token
// =============================================================

let verificaToken = ( request, response, next ) => {
    
    let token = request.get('Authorization');

    jwt.verify( token, process.env.SEED, ( err, decoded ) => {
        if ( err ) {
            return response.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido."
                }
            });
        };

        request.usuario = decoded.usuario;
        next();
    })
};

// =============================================================
// Verificar AdminRole
// =============================================================

let verificaAdminRole = (request, response, next) => {
    let usuario = request.usuario;

    if(usuario.role === "ADMIN_ROLE"){
        next();
    } else {
        return response.json({
            ok: false,
            err: {
                message: 'El usuario no es Administrador.'
            }
        });
    };

}


module.exports = {
    verificaToken, 
    verificaAdminRole
}