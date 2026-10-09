const mysql = require('mysql2');

// Configuración de la conexión a MySql
const conexion = mysql.createConnection({
    host: "localhost", // Servidor local
    user: "root", // Usuario de MySQL (Por defecto en XAMPP)
    database: "tienda" // Nombre de nuestra BD
});

// Comprobar si la conexión fue existosa

conexion.connect((error) =>{
    if (error) {
        console.error("Error al conectar con MySQL:", error);
        return;
    }
    console.log("Conexión exitosa con MySQL");
});

// Exportar la conexión para reutilizarla en las rutas del servidor
module.exports = conexion;