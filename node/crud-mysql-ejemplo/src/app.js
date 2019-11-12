//Código del servidor
const path = require('path');
const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Importar rutas
const indiceRutas = require('./rutas/index');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'vistas'));

//Middleware
app.use(myConnection(mysql, { //Conexión
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306, //Puerto por default de mysql
    database: 'crudnodejsmysql'
}, 'single')) //Conexión simple: Host

//Permite que los datos que se envíen por un formulario se auditen de manera correcta
// Bandera extended: false. Codificadar correctamente los datos a través de la URL
// Para que se manden únicamente datos planos: nombres, letras o números. SIN IMAGENES
// ******Importante ponerlo al enviar datos hacia el servidor desde un formulario******
app.use(express.urlencoded({extended: false}));

//Usamos las rutas
app.use('/', indiceRutas);

app.listen(app.get('port'),() =>{
    console.log('Escuchando en el puerto 3000');
});

