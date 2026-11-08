const Usuario = require('../models/usuario.model');

exports.obtenerUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.obtenerTodos();

        res.json(usuarios);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { correo, contrasena } = req.body;

        const usuario = await Usuario.login(
            correo,
            contrasena
        );

        if (usuario.length === 0) {

            return res.status(401).json({
                success: false,
                mensaje: 'Credenciales incorrectas'
            });

        }

        res.json({
            success: true,
            usuario: usuario[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

};