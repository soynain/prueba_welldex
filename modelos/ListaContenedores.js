const Contenedor=require('./Contenedor')
let ListaContenedores=class{
    #listaContenedores=[]
    
    añadirNuevoContenedorConFecha(objetoContenedor,fechaDeDescargo){
        this.#listaContenedores.push({objetoContenedor,fechaDeDescargo})
    }

    get getListaContenedores(){
        return this.#listaContenedores
    }
}