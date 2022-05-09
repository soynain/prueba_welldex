let Exportacion=class{
    #fechaDeZarpeETD
    #fechaDeZarpeFinal
    #paisDestino

    get getETD(){
        return this.#fechaDeZarpeETD
    }

    get getFechaDeZarpeFinal(){
        return this.#fechaDeZarpeFinal
    }

    get getPaisDestino(){
        return this.#paisDestino
    }

    set setETD(FechaETD){
        this.#fechaDeZarpeETD=FechaETD
    }

    set setFechaDeZarpeFinal(fechaZarpeFinal){
        this.#fechaDeZarpeFinal=fechaZarpeFinal
    }

    set setPaisDestino(paisDestino){
        this.#paisDestino=paisDestino
    }
}