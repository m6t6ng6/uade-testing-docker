//const config_db  = require('./db');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const db = require('./mysql/connection.js');

const app = express();
const host = "hostname";
const port = 10000;
//app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());

app.get('/', function(req, res) {
    //arrayDeCampos = ['id_registro', 'cotizacion', 'fecha_cotizacion'];
    //filtro = 'fecha_cotizacion LIKE "%" ORDER BY id_registro DESC LIMIT 1;';
    //config_db.select_a_base_de_datos(arrayDeCampos, 'historico', filtro)
    //    .then(resultado => res.send(resultado), err => console.log(err));
    console.log("conexión satisfactoria en /");
});

app.get('/test', function(req, res) {
    //arrayDeCampos = ['id_registro', 'cotizacion', 'fecha_cotizacion'];
    //filtro = 'fecha_cotizacion LIKE "%" ORDER BY id_registro DESC LIMIT 1;';
    //config_db.select_a_base_de_datos(arrayDeCampos, 'historico', filtro)
    //    .then(resultado => res.send(resultado), err => console.log(err));
    console.log("conexión satisfactoria en /test");
});

app.listen(port, function(err, result) {
    if (err) throw err;
    console.log('App escuchando en http://' + host + ':' + port);
});

/* PING */

app.get('/ping', function(req, res) {
  console.log('pong')
})

/* Get users and hosts */

app.get('/user', function (req, res) {
  db.query(`SELECT User, Host from user;`, function (err, result) {
      if(err) throw err
      console.log(result)
    }
  )
})

/* Get tables */

app.get('/tables', function (req, res) {
  db.query(`show tables;`, function (err, result) {
      if(err) throw err
      console.log(result)
    }
  )
})

inicio();

function inicio() {
  //config_db.conectar_a_mysql();
  //config_db.conectar_a_base_de_datos('testing');
  //var fecha = config_db.format_date();
  console.log('Inicio de aplicación.');
  //valor_del_dolar_insert_en_mysql();
}
