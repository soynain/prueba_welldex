const express = require('express')
const router = express.Router()
const OperacionesAduanalesController = require('../controladores/OperacionesAduanalesController')
const OperacionAduana = require('../modelos/OperacionAduana')
const ListaAduanas = require('../modelos/ListaAduanas')
/*al tener una instancia desde el controlador OperacionesAduanalesController,
nos devolverá la instancia de un objeto unico (singleton)*/
let getOperacionesAduanalesDiversas = new OperacionesAduanalesController()

/*protejo las rutas*/
function protegerRutas(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('nana')
    next();
  } else {
    //  console.log('nana',req.isAuthenticated(),req.session)
    res.redirect('/v1/login')
  }
}

router.get('/login', (req, res) => {
  /*truco sucio para mostrar el label de credenciales incorrectas
  , lo adecuado seria manejarlo desde un fetch con res.sendStatus(200) || res.sendStatus(404)*/
  res.render('loginEmpleado.ejs', error = { display: 'display:none' })
})

router.get('/panel-principal', protegerRutas, async (req, res) => {
  /*traigo todas las operaciones vinculadas con el empleado y el estatus,
  se puede modificar para que sean traidos por el id de la aduana,
  asi cualquier empleado podria cambiar el estatus si es que se rotan turnos*/ 
  let arrayOperacionesAduana = await Promise.all([
    getOperacionesAduanalesDiversas.getOperacionesAduanalesAlta(req.user.ID_EMPLEADO),
    getOperacionesAduanalesDiversas.getOperacionesAduanalesZarpe(req.user.ID_EMPLEADO),
    getOperacionesAduanalesDiversas.getOperacionesAduanalesTrayecto(req.user.ID_EMPLEADO),
    getOperacionesAduanalesDiversas.getOperacionesAduanalesDescargo(req.user.ID_EMPLEADO)
  ])
//  console.log(arrayOperacionesAduana)

/*en si esto es inecesario, inicio una instancia de la clase del inciso a,
pero podria manipularlo directamente por JSON y sería más rapido*/
  let jsonAObjeto = new OperacionAduana()
  /*almaceno esas instancias de objetos en un arreglo que se envia al front, y con templates
  se refleja la informacion en el html */
  let arrayObjetosOperacionesAduana = []
  if(Object.entries(arrayOperacionesAduana[0]).length>0){
    for (i = 0; i < Object.entries(arrayOperacionesAduana[0]).length; i++) {
      arrayObjetosOperacionesAduana.push(jsonAObjeto.fromJson(arrayOperacionesAduana[0][i]))
    }
  }
  if(Object.entries(arrayOperacionesAduana[1]).length>0){
    for (i = 0; i < Object.entries(arrayOperacionesAduana[1]).length; i++) {
      arrayObjetosOperacionesAduana.push(jsonAObjeto.fromJson(arrayOperacionesAduana[1][i]))
    }
  }
  if(Object.entries(arrayOperacionesAduana[2]).length>0){
    for (i = 0; i < Object.entries(arrayOperacionesAduana[2]).length; i++) {
      arrayObjetosOperacionesAduana.push(jsonAObjeto.fromJson(arrayOperacionesAduana[2][i]))
    }
  }
  if(Object.entries(arrayOperacionesAduana[3]).length>0){
    for (i = 0; i < Object.entries(arrayOperacionesAduana[3]).length; i++) {
      arrayObjetosOperacionesAduana.push(jsonAObjeto.fromJson(arrayOperacionesAduana[3][i]))
    }
  }
 // console.log(arrayObjetosOperacionesAduana, 'dsdsds',arrayObjetosOperacionesAduana.some(e=>e.estatus=='DESCARGO'))
  res.render('panelPrincipal.ejs',obj={arrayObjetosOperacionesAduana})
})

router.get('/form-op-basico', protegerRutas, async (req, res) => {
  let lista=new ListaAduanas()
  let listaAduanasObtenidas=await lista.mapearListaAduanas()
  console.log(listaAduanasObtenidas[0])
  res.render('alta-op-portuaria.ejs',obj={listaAduanasObtenidas:listaAduanasObtenidas[0]})
})

module.exports = router