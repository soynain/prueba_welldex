const AduanasGetController=require('../controladores/AduanasGetController')
let listaAduanas=new AduanasGetController()
let ListaAduanas=class{
    listaAduanas=[]

    constructor(){

    }
    añadirInstanciaAduanaALista(obj){
        this.listaAduanas.push(obj)
    }

    async mapearListaAduanas(){
        this.listaAduanas=await listaAduanas.obtenerListaAduanasParaFormulario()
        return this.listaAduanas
    }
    

}

module.exports=ListaAduanas