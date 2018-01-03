//VARIABLES
var titulo = "Steph y sus amigos"
var persona = {
	nombres: "Steph",
	apellidos: "Manrique Chocce",
	edad: "24",
  foto: 'steph.jpg',
}

var amigos = [
	{
		nombres: "Aaron Gabriel",
		apellidos: "Ramirez Palomino",
		edad: "21",
    foto: 'aaron.jpg',
	},
	{
		nombres: "Peter Adrian Christian",
		apellidos: "Quispe Guía",
		edad: "22",
    foto: 'peter.jpg',
	},
	{
		nombres: "Neskim Blas",
		apellidos: "Mamani ",
		edad: "26",
    foto: 'nick.jpg',
	},
]
//REQUERIMIENTO DE MODULOS
var express = require('express');
var swig = require('swig');
//CONFIGURACIONES
  //creación del servidor local
var server = express();
  // Integración del motor de templates swig

  server.engine('html', swig.renderFile);
  server.set('view engine', 'html');
  server.set('views', __dirname +'/views');
  swig.setDefaults({cache:false});
  //Seteo de direccion de carpeta de archivos estáticos
  server.use(express.static(__dirname + '/public'));
//PETICIONES
  //Cuando exista una peticion en el servidor
  server.get('/', function(req,res){
    res.render('template.html',{titulo:titulo,persona:persona,amigos:amigos});
  });
//INICIAR SERVIDOR
  //Se corre el servidor en el puerto 8000
  server.listen(8000,function(){
    console.log('El servidor está escuchando en el puerto '+ 8000)
  });
