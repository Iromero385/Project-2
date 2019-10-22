const express = require("express");

const PORT = process.env.NODE_ENV || 3001; 

const app = express(); 

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));



app.get("/", function(req, res){
    const message = req.params.message;
    console.log(message); 
    res.write(message)
    res.end(); 
})

app.listen(PORT, () => console.log(`Port stated on port: ${PORT}`))
