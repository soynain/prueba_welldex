const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy //para verificaciones locales
const BaseDeDatos = require('../repositorio/BaseDatos')
let conexion = new BaseDeDatos()
const promisePool=conexion.pool.promise()
/* AQUI se serializa el objeto que se guarda en el servidor,
se puede mejorar guardando tal serializacion en mysql, mongodb
y en redis.*/
passport.use('local.signin', new LocalStrategy({
  usernameField: 'idEmpleadoText',
  passwordField: 'contra',
  passReqToCallback: true,
},
/*por medio del request object, buscamos el id de empleado y contraseña*/
  async (req, idEmpleadoText, contra, done) => {
    const rows = await promisePool.query('SELECT * FROM EMPLEADO WHERE ID_EMPLEADO=?', [idEmpleadoText])
  //  console.log(rows[0][0])
    if (rows.length > 0) {
      const user = rows[0][0]
  //    console.log(user)
      if (user.CONTRASENA === contra) {
   //     console.log(user) se serializa el usuario
        done(null, user)
      } else {
        done(null, false)
      }
    } else {
      return done(null, false)
    }
  }
));

passport.serializeUser((user, done) => {
//  console.log(user, 'carajo')
  done(null, user);
});

passport.deserializeUser( (user, done) => {
 // console.log(user, 'imprimete de buena vez bastardo');
  conexion.pool.query('SELECT * FROM EMPLEADO WHERE ID_EMPLEADO=?', [user.ID_EMPLEADO], (err, rows) => {
   //console.log(rows[0], 'ayyyyy')
    done(null, rows[0]);
  });
});

