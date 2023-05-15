var mysql = require('mysql');
const express = require("express");
require('dotenv').config()
const app = express();
app.use(express.json());

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou com MySQL");
});

app.post("/recipes", (request, response) => {
    try {
        con.query(`SELECT * FROM tb_receitas WHERE type = '${request.body.type}'`, function (err, result, fields) {
            if (err) throw err;
            response.status(200).json(result);
        });
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: 'error' })
    }
});

app.post("/filter", (request, response) => {
    try {
        con.query(`SELECT * FROM tb_receitas WHERE strMeal LIKE '%${request.body.searchPhrase}%'`, function (err, result, fields) {
            if (err) throw err;
            response.status(200).json(result);
        });
    } catch (err) {
        console.error(err);
        response.status(500).json({ message: 'error' })
    }
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});