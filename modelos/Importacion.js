let Importacion=class{
    #fechaDeArriboETA
    #fechaDeArriboFinal
    #paisOrigen

    get getETA(){
        return this.#fechaDeArriboETA
    }

    get getFechaDeZarpeFinal(){
        return this.#fechaDeArriboFinal
    }

    get getPaisDestino(){
        return this.#paisOrigen
    }

    set setETD(FechaETA){
        this.#fechaDeArriboETA=FechaETA
    }

    set setFechaDeArriboFinal(fechaArriboFinal){
        this.#fechaDeZarpeFinal=fechaArriboFinal
    }

    set setPaisOrigen(paisOrigen){
        this.#paisDestino=paisOrigen
    }
}