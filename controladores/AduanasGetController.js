const BaseDeDatos=require('../repositorio/BaseDatos')
let conexion=new BaseDeDatos()
let promisePool=conexion.pool.promise()

let AduanasGetController=class{
    rows=[]
    async obtenerListaAduanasParaFormulario(){
        this.rows=await promisePool.query('select * from aduanas')
       // console.log(this.rows)
        return this.rows
    }
}

module.exports=AduanasGetController