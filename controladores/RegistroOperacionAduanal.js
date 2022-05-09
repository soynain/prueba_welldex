const BaseDeDatos=require('../repositorio/BaseDatos')
let conexion=new BaseDeDatos()
/*paso la instancia a promesa para que pueda manejar consultas async/await */
let promisePool=conexion.pool.promise()
const ox = require('crypto'); //DEPENDENCIA para generarFolioOperacionAduanal, es modulo de node

let RegistroOperacionAduanal=class{
    /*fragmento de codigo para generar letras aleatorias, creando un array de bytes aleatorio
    y convirtiendolo a letras, es seguro, pero no tanto como un uuid*/
    generarFolioOperacionAduanal(wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') {
        return Array.from(ox.randomFillSync(new Uint8Array(10)))
          .map((x) => wishlist[x % wishlist.length])
          .join('').toString();
      }

      /* alta de operaciones aduaneras*/
    async altaOperacionAduanal(pedimento,cliente,patente,aduana,tipoOperacion,tipoMercancia,idEmpleado,estatus='ALTA'){
        console.log(idEmpleado)
        const results=await promisePool.execute(`INSERT INTO operacion_aduanera VALUES (?,?,?,?,?,?,?,?,?)`,
        [this.generarFolioOperacionAduanal(),pedimento,cliente,patente,estatus,tipoOperacion,tipoMercancia,aduana,idEmpleado])
        console.log(results.affectedRows,' resultados alta')
    }
}
module.exports=RegistroOperacionAduanal