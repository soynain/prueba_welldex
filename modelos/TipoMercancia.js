const CargaSuelta=require('./CargaSuelta')

let TipoMercancia=class{
    #cargaSuelta
    #contenedorLista

    /*constructor(objetoCargaSuelta,objetoContenedorLista){
        this.#cargaSuelta=objetoCargaSuelta
        this.#contenedorLista=objetoContenedorLista
    }
*/
    get getCargaSuelta(){
        return this.#cargaSuelta
    }

    get getContenedorLista(){
        return this.#contenedorLista
    }

    set setContenedorLista(objetoContenedorLista){
        this.#contenedorLista=objetoContenedorLista
    }

    set setCargaSuelta(objetoCargaSuelta){
        this.#cargaSuelta=objetoCargaSuelta
    }
}