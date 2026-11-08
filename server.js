require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/usuarios.routes'));

app.get('/', async (req, res) => {

    try {

        const [rows] = await db.query('SELECT NOW() AS fecha');

        res.json({
            mensaje: 'API Web Training funcionando',
            servidor_mysql: rows[0].fecha
        });

    } catch (error) {

        console.error('ERROR MYSQL:', error);

        res.status(500).json({
            error: error.message
        });

    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Servidor iniciado en puerto ${PORT}`);

});