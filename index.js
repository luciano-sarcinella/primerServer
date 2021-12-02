let fs = require ("fs")
let express = require ("express");
let app = express();
const PORT = 8080;
let archivo = "./archivos.txt"
let path = require("path")
let Handle = require("./manejarArchivos");

let manejarArchivos = new Handle(archivo)

app.get("/", (req,res,next)=>{
    res.send("<p style='color:blue;'>Server de luchi con express</p>")
})
app.get("/productos", async (req,res,next)=>{
    devolverProductos(req,res);
}); 
app.get("/productosRandom", (req,res,next)=>{
    devolverProductosRandom(req,res);
});


app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`)
})

function devolverProductos(req, res){
    manejarArchivos.getAll().then(data => {
        res.send(data);
    }).catch(error => {
        res.send(error);
    });

} 
function devolverProductosRandom(req, res){
    manejarArchivos.getbyId(Math.floor(Math.random() * 4) + 1).then(data => {
        res.send(data);
    }).catch(error => {
        res.send(error);
    });

}
