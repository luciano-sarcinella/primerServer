let express = require ("express");
let app = express();
let moment = require ("moment");
const PORT = 8080;
let totalVisitas = 0;

app.get("/", (req,res,next)=>{
    totalVisitas++;
    res.send("<p style='color:blue;'>Mi primer servidor con express</p>")
})
app.get("/visitas", (req,res,next)=>{
    res.send(`La cantidad de visitas es de ${totalVisitas}`)
})
app.get("/fyh", (req,res,next)=>{
    res.json({fyh:moment().format("DD/MM/YYY HH:MM:SS")})
})
app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`)
})