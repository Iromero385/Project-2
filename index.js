// dependencies for express server
const express = require("express");
const mysql = require("mysql")
// mysql config
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "Explorer_db"
});
// testing mysql connection
connection.connect(function (err, results, fields) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

const PORT = process.env.NODE_ENV || 3002;
const app = express();
if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// set up routes - IMR

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
app.get("/api/locations/:id", function (req, res) {
    const id = req.params.id;
    connection.query(`SELECT * FROM locations WHERE ?`, { id }, function (err, results, fields) {
        if (err) throw err;
        res.json(results)
    })
})
app.get("/api/locations/city/:city", function (req, res) {
    const city = req.params.city.split("+").join(" ");
    connection.query(`SELECT * FROM locations WHERE ?`, { city }, function (err, results, fields) {
        if (err) throw err;
        res.json(results)
    })
})



app.listen(PORT, () => console.log(`Port stated on port: ${PORT}`))
