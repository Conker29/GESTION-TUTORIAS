import {Router} from 'express'
import { confirmarMailEstudiante, recuperarPasswordEstudiante, registroEstudiante, comprobarTokenPasswordEstudiante, crearNuevoPasswordEstudiante } from '../controllers/estudiante_controller.js'
const routerEstudiante = Router()

// api/estudiante/registro

routerEstudiante.post('/registro',registroEstudiante)

routerEstudiante.get('/confirmar/:token', confirmarMailEstudiante)

routerEstudiante.post('/recuperarpassword',recuperarPasswordEstudiante)

routerEstudiante.get('/recuperarpassword/:token',comprobarTokenPasswordEstudiante)

routerEstudiante.post('/nuevopassword/:token',crearNuevoPasswordEstudiante)

export default routerEstudiante