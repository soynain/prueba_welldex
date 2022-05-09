const express=require('express') //framework de desarrollo de apis
const app=express() //inicializar el framework
const morgan=require('morgan') //debugger muy util para ver todos los jsons entrantes y salientes en consola
const passport = require('passport') //plugin para guardar sesion en el servidor (disponible en laravel tambien)
require('dotenv').config({debug:'TRUE'}) //variables de entorno
const BaseDeDatos=require('./repositorio/BaseDatos') //clase base de datos
const session=require('express-session') //iniciar sesion en el servidor
require('./auth/auth-empleado').passport //inicializar el autenticador, si lo tacha ya no funciona

app.set('view engine','ejs') //renderizado en el servidor, templates
app.set('port',3000 || process.env.PORT)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
app.use(express.urlencoded({extended:false})) 
app.use(express.json())
app.use(express.static(__dirname+'/public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))
 //subrutas
app.use('/v1',require('./rutas/empleado-rutas-get'))
app.use('/v1',require('./rutas/empleado-rutas-post'))

//iniciar servidor
app.listen(app.get('port'), ()=>{
    console.log('welldex corriendo')
    
})

module.exports=app