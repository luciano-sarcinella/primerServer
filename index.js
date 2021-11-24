let express = require ("express");
let app = express();
const PORT = 8080;
let archivo = "./archivos.txt"
let Handle = require("./manejarArchivos");

let manejarArchivos = new Handle(archivo)

app.get("/", (req,res,next)=>{
    res.send("<p style='color:blue;'>Mi primer servidor con express</p>")
})
app.get("/productos", async (req,res,next)=>{
    const info = await manejarArchivos.getProductos()
    res.send(info);
});
app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`)
})
