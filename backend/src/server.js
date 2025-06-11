import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routerDocente from "./routers/docente_routes.js";
import routerEstudiante from "./routers/estudiante_routes.js";

//Inicializaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000)  //Variable global. app.set('port', 3000)   Compartir informacion que no comparta datos sensibles
app.use(cors())      //Middleware

//Middlewares
app.use(express.json())

//Rutas
app.get('/', (req, res) => {
    res.send("Server on")               //http:localhost:3000/
})

//Rutas
app.use('/api/docente', routerDocente)
app.use('/api/estudiante', routerEstudiante)
app.use('/api/administrador', routerAdministrador)

//Manejo de rutas que no existen
app.use((re, res) => {res.status(404).send("Endpoint no encontrado")})

//Exportar la instancia
export default app;