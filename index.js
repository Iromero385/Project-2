//dependencies for express server 
const express = require("express");
const mysql = require("mysql");
//my sql establishes connection
const connection = mysql.createConnection({
    host:'localhost',
    user: "root",
    password: "password",
    database: "Explorer_db"
});
//testing my sql connection
connection.connect(function(err, res, fields){
    if(err) throw (err);
    console.log("connected as id " + connection.threadId)
});

const PORT = process.env.NODE_ENV || 3001; 

const app = express(); 

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// setting up routes

app.get("/api/:table/all", function(req,res){
    const table = req.params.table;
    connection.query(`SELECT * FROM ??`, [table], function(err,results,fields){
        if(err)throw err;
        res.json(results)
    })
})
// setting up  specific data from tables
app.get("/api/user/:id", function(req,res){
    const id = req.params.id;
    connection.query(`SELECT * FROM explorers WHERE id= ?`, {id}, function(err, results, fields){
        if(err)throw err;
        res.json(results)
    });
})
app.get("/api/locations/:id", function(req,res){
    const id = req.params.id;
    connection.query(`SELECT * FROM locations WHERE ?`, {id}, function(err, result,fields){
        if(err)throw err;
        res.json(results);
    })
})

app.listen(PORT, () => console.log(`Port stated on port: ${PORT}`))
