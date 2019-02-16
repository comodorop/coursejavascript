const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/clients", (req, resp )=>{
    let info = req.body
    console.log(info)
    try{
        return resp.status(201).send({status: 201, data: [], msg:"Los registros fueron guardados"})
    }catch(err){
        return resp.status(500).send({status: 500, data: [], msg:"Error en el servidor"})
    }
})



app.listen('8181', ()=>{
    console.log("se inicializo el server")
})
