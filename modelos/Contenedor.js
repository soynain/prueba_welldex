let Contenedor=class{
    #numeroContenedor
    #tipoContenedor
    #dimensiones

    constructor(numeroContenedor,tipoContenedor,dimensiones){
        this.#numeroContenedor=numeroContenedor
        this.#tipoContenedor=tipoContenedor
        this.#dimensiones=dimensiones
    }

    get getNumeroContenedor(){
        return this.#numeroContenedor
    }

    get getTipoContenedor(){
        return this.#tipoContenedor
    }

    get getDimensiones(){
        return this.#dimensiones
    }

    set setNumeroContenedor(numeroContenedor){
        this.#numeroContenedor=numeroContenedor
    }

    set setTipoContenedor(tipoContenedor){
        this.#tipoContenedor=tipoContenedor
    }

    set setDimensiones(dimensiones){
        this.#dimensiones=dimensiones
    }
}