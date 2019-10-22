// dependencies for express server
const express = require("express");
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "Explorer_db"
});

connection.connect(function (err, results, fields) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});
// const columns = ["facts", "comments", "destination"]
// const table = ["locations"]
// connection.query(`SELECT ?? FROM ??`, [columns, locations], function (error, results, fields) {
//     console.log(results)
// })

const PORT = process.env.NODE_ENV || 3001;

const app = express();

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// set up routes - IMR

// app.get("/api/locations/all", function (req, res) {
//     connection.query(`SELECT * FROM locations`, function (err, results, fields) {
//         if (err) throw err;
//         res.json(results);
//     })
// })
// app.get("/api/user/all", function(req,res){
//     connection.query(`SELECT * FROM explorers`, function*(err,results, fields){
//         if(err) throw err; 
//         res.json(results);
//     })
// })

app.get("/api/:table/all", function (req, res) {
    const table = req.params.table
    connection.query(`SELECT * FROM ??`, [table], function (err, results, fields) {
        if (err) throw err;
        res.json(results)
    })
})
app.get("/api/user/:id", function (req, res) {
    const id = req.params.id;
    connection.query(`SELECT * FROM explorers WHERE ?`, { id }, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    })
})



app.listen(PORT, () => console.log(`Port stated on port: ${PORT}`))
