const db = require('../config/db');

class Usuario {

    static async obtenerTodos() {

        const [rows] = await db.query(`
            SELECT
                id_usuario,
                nombres,
                apellidos,
                documento,
                correo,
                estado
            FROM usuario
        `);

        return rows;
    }

    static async login(correo, contrasena) {

        const [rows] = await db.query(`
            SELECT
                id_usuario,
                nombres,
                apellidos,
                correo,
                estado
            FROM usuario
            WHERE correo = ?
            AND contrasena = ?
        `,
        [correo, contrasena]);

        return rows;
    }

}

module.exports = Usuario;