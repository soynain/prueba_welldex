const BaseDeDatos=require('../repositorio/BaseDatos')

let conexion=new BaseDeDatos()
/*paso la instancia a promesa para que pueda manejar consultas async/await */
let promisePool=conexion.pool.promise()

/*la clase sirve para traer operaciones aduanales de acuerdo a su estatus */
let OperacionesAduanalesController=class{
    rows=[]
    async getOperacionesAduanalesAlta(idEmpleado){
  //      console.log(typeof idEmpleado,idEmpleado)
        this.rows=await promisePool.query(`SELECT * FROM operacion_aduanera WHERE FK_EMPLEADO=? AND ESTATUS="ALTA"`,[idEmpleado])
      //  console.log(this.rows)
        return this.rows[0]
    }

    async getOperacionesAduanalesZarpe(idEmpleado){
        this.rows=await promisePool.query('SELECT * FROM operacion_aduanera WHERE FK_EMPLEADO=? AND ESTATUS="EN ESPERA DE ZARPE"',[idEmpleado])
        return this.rows[0]
    }

    async getOperacionesAduanalesTrayecto(idEmpleado){
        this.rows=await promisePool.query('SELECT * FROM operacion_aduanera WHERE FK_EMPLEADO=? AND ESTATUS="EN TRAYECTO"',[idEmpleado])
        return this.rows[0]
    }

    async getOperacionesAduanalesDescargo(idEmpleado){
        this.rows=await promisePool.query(`SELECT * FROM operacion_aduanera WHERE FK_EMPLEADO=? AND ESTATUS="DESCARGO"`,[idEmpleado])
        return this.rows[0]
    }
    

}

module.exports=OperacionesAduanalesController