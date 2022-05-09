const mysql = require('mysql2')

require('dotenv').config()
/*repositorio de los datos de la aplicación, con patron singleton*/
let BaseDeDatos = class {
    static pool = null /*variable estatica, para toda instancia se ocupa el mismo valor*/ 

    constructor() {
        //se inicia la bdd con las variables de entorno.
        
        /*si ya hay una instancia iniciada de la clase, se devuelve la misma intencia*/ 
        if(typeof BaseDeDatos.instance=="object"){
            console.log('singleton')
            return BaseDeDatos.instance          
        }
        
        /*si no se han hecho instancias, se crea la instancia objeto*/
        console.log('primera vez')
        this.pool = mysql.createPool({
            host: process.env.LOCALHOST,
            user: process.env.DBNAME,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            password:   process.env.DB_PASS
        });

        BaseDeDatos.instance=this
        return this
        
    }
}

module.exports = BaseDeDatos