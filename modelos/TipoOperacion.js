const Exportacion=require('./Exportacion')
const Importacion=require('./Importacion')
let TipoOperacion=class{
    #objetoExportacion
    #objetoImportacion
    
    get getObjetoExportacion(){
        return this.#objetoExportacion
    }

    get getObjetoImportacion(){
        return this.#objetoImportacion
    }

    set setObjetoExportacion(objetoExportacion){
        this.#objetoExportacion=objetoExportacion
    }

    set setObjetoImportacion(objetoImportacion){
        this.#objetoImportacion=objetoImportacion
    }
}