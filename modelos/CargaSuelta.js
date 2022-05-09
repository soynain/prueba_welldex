let CargaSuelta=class{
    #descripcionCarga
    #cantidadCarga
    #listaSesionesCargaSuelta

    constructor(descripcionCarga,cantidadCarga,listaSesionesCargaSuelta){
        this.#descripcionCarga=descripcionCarga
        this.#cantidadCarga=cantidadCarga
        this.#listaSesionesCargaSuelta=listaSesionesCargaSuelta
    }

    get getDescripcionCarga(){
        return this.#descripcionCarga
    }

    get getCantidadCarga(){
        return this.#cantidadCarga
    }

    get getListaSesionesCargaSuelta(){
        return this.#listaSesionesCargaSuelta
    }

    set setDescripcionCarga(descripcionCarga){
        this.#descripcionCarga=descripcionCarga
    }

    set setCantidadCarga(cantidadCarga){
        this.#cantidadCarga=cantidadCarga
    }

    set setListaSesionesCargaSuelta(listaSesionesCargaSuelta){
        this.#listaSesionesCargaSuelta=listaSesionesCargaSuelta
    }
}