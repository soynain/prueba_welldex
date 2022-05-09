/*esta clase forma parte del inciso "a" de la prueba técnica, getters y setters
de los atributos de esta clase*/

const Aduanas = require('./Aduanas')

let OperacionAduana = class {
    #folio
    #pedimento
    #cliente
    #aduana
    #patente
    #tipoMercancia
    #tipoOperacion
    #estatus

    

    constructor(folio, pedimento, cliente, objetoAduanas, patente,
        objetoTipoMercancia, objetoTipoOperacion, estatus) {
        this.#folio = folio
        this.#pedimento = pedimento
        this.#cliente = cliente
        this.#aduana = objetoAduanas
        this.#patente = patente
        this.#tipoMercancia = objetoTipoMercancia
        this.#tipoOperacion = objetoTipoOperacion
        this.#estatus = estatus
    }

    fromJson(obj){
       // console.log(obj)
        let newObjeto= new OperacionAduana()
        newObjeto.folio=obj.FOLIO
        newObjeto.pedimento=obj.PEDIMENTO
        newObjeto.cliente=obj.CLIENTE
        newObjeto.patente=obj.PATENTE
        newObjeto.estatus=obj.ESTATUS 
        return newObjeto
    }
    /*Setters del inciso a, en general todas las clases los tendrán*/
    set setFolio(folio) {
        this.#folio = folio
    }

    set setPedimento(pedimento) {
        this.#pedimento = pedimento
    }

    set setCliente(cliente) {
        this.#cliente = cliente
    }

    set setAduana(objetoAduanas) {
        this.#aduana = objetoAduanas
    }

    set setPatente(patente) {
        this.#patente = patente
    }

    set setTipoMerc(objetoTipoMercancia) {
        this.#tipoMercancia = objetoTipoMercancia
    }

    set setTipoOper(objetoTipoOperacion) {
        this.#tipoOperacion = objetoTipoOperacion
    }

    set setEstatus(estatus) {
        this.#estatus = estatus
    }

    /*Getters del inciso a, en general todas las clases los tendrán*/
    get getFolio() {
        return this.#folio
    }

    get getPedimento() {
        return this.#pedimento
    }

    get getCliente() {
        return this.#cliente
    }

    get getAduana() {
        return this.#aduana
    }

    get getPatente() {
        return this.#patente
    }

    get getMercancia() {
        return this.#tipoMercancia
    }

    get getOperacion() {
        return this.#tipoOperacion
    }

    get getEstatus() {
        return this.#estatus
    }
}

module.exports = OperacionAduana