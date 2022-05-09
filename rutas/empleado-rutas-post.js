const express = require('express')
const router = express.Router()
const passport = require('passport')
const RegistroOperacionAduanal=require('../controladores/RegistroOperacionAduanal')

let darDeAltaOpAduanera=new RegistroOperacionAduanal()
/*protejo las rutas*/
function protegerRutas(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/v1/login')
  }
}

/* callback custom para gestionar excepciones al iniciar sesion*/
router.post('/login-p', (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local.signin', function(err, user)  {
    if (err) throw err
    /* hay una dependencia en npm de mensajes flash que por tiempo ya no pude implementar,
    esto lo que provoca es renderizar pero no cambiar la url, y exponer la
    url del post en el explorador, es un detalle pequeño porque
    sigue funcionando el login, pero en temas de seguridad no es adecuado*/
    if (!user) {
      res.render('loginEmpleado.ejs', error = { display: 'display:block' });
      return
    }
    req.logIn(user, function (err) {
      res.redirect('/v1/panel-principal');
      return
    });
  })(req, res,next);
})

/*cerrar sesion*/
router.post('/registrar-op-portuaria-p1', protegerRutas, async(req, res) => {
  console.log(req.body,' pene')
  console.log(req.user.ID_EMPLEADO,'ñaca')
  const{pedimento,cliente,patente,aduanaId,tipoOperacion,tipoMercancia}=req.body
  await darDeAltaOpAduanera.altaOperacionAduanal(pedimento.toString().toUpperCase(),
  cliente.toString().toUpperCase(),
  patente.toString().toUpperCase(),
  aduanaId.toString().toUpperCase(),
  tipoOperacion.toString().toUpperCase(), 
  tipoMercancia.toString().toUpperCase(),
  req.user.ID_EMPLEADO)
  return res.redirect('/v1/panel-principal')
})

router.post('/logout-p', protegerRutas, (req, res) => {
  req.logOut()
  res.redirect('/v1/login')
})

module.exports = router