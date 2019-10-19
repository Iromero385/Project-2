const express = require("express");

const PORT = process.env.NODE_ENV || 3001; 

const app = express(); 

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// set up routes - IMR

app.get("/nat", function(req, res){
    res.write("nat is going to hit papito")
    res.end(); 
})

app.get("/j", function(req, res){
    res.write("j is cool so he wont hit no one")
    res.end(); 
})

app.get("/papito", function(req, res){
    res.json({hit:"papito, dont do violance"})
})

app.get("/papito/:message", function(req, res){
    const message = req.params.message;
    console.log(message); 
    res.write(message)
    res.end(); 
})

app.listen(PORT, () => console.log(`Port stated on port: ${PORT}`))
