let ListaSesionesCargaSuelta=class{
    #fechaDeDescargo
    #cifraDescargada
    constructor(fechaDeDescargo,cifraDescargada){
        this.#fechaDeDescargo=fechaDeDescargo
        this.#cifraDescargada=cifraDescargada
    }

    get getFechaDeDescargo(){
        return this.#fechaDeDescargo
    }

    get getCifraDescargada(){
        return this.#cifraDescargada
    }

    set setFechaDeDescargo(fechaDeDescargo){
        this.#fechaDeDescargo=fechaDeDescargo
    }

    set setCifraDescargada(cifraDescargada){
        this.#cifraDescargada=cifraDescargada
    }
}