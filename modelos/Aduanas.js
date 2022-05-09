let Aduanas=class{
    #id_aduana
    #direccion_aduana
    #pais

    constructor(id_aduana,direccion_aduana,pais){
        this.#id_aduana=id_aduana
        this.#direccion_aduana=direccion_aduana
        this.#pais=pais
    }

    get getIdAduana(){
        return this.#id_aduana
    }

    get getDireccionAduana(){
        return this.#direccion_aduana
    }

    get getPais(){
        return this.#pais
    }

    set setIdAduana(id_aduana){
        this.#id_aduana=id_aduana
    }

    set setDireccionAduana(direccion_aduana){
        this.#direccion_aduana=direccion_aduana
    }

    set setPais(pais){
        this.#pais=pais
    }
}

module.export=Aduanas