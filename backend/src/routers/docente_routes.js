import {Router} from 'express'
import { confirmarMailDocente, recuperarPasswordDocente, registroDocente, comprobarTokenPasswordDocente, crearNuevoPasswordDocente } from '../controllers/docente_controller.js'
const routerDocente = Router()

routerDocente.post('/registro',registroDocente)

routerDocente.get('/confirmar/:token', confirmarMailDocente)


routerDocente.post('/recuperarpassword',recuperarPasswordDocente)

routerDocente.get('/recuperarpassword/:token',comprobarTokenPasswordDocente)

routerDocente.post('/nuevopassword/:token',crearNuevoPasswordDocente)

export default routerDocente