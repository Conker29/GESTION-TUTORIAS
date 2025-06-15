import {Router} from 'express'
import { confirmarMailDocente, recuperarPasswordDocente, registroDocente, comprobarTokenPasswordDocente, crearNuevoPasswordDocente, loginDocente } from '../controllers/docente_controller.js'
const routerDocente = Router()

routerDocente.post('/registro',registroDocente)

routerDocente.get('/confirmar/:token', confirmarMailDocente)


routerDocente.post('/recuperarpassword',recuperarPasswordDocente)

routerDocente.get('/recuperarpassword/:token',comprobarTokenPasswordDocente)

routerDocente.post('/nuevopassword/:token',crearNuevoPasswordDocente)

routerDocente.post ('/login',loginDocente)

export default routerDocente