import {Router} from 'express'
import { confirmarMailAdministrador, recuperarPasswordAdministrador, registroAdministrador, comprobarTokenPasswordAdministrador, crearNuevoPasswordAdministrador, loginAdministrador } from '../controllers/administrador_controller.js'
const routerAdministrador = Router()

routerAdministrador.post('/registro',registroAdministrador)

routerAdministrador.get('/confirmar/:token', confirmarMailAdministrador)

routerAdministrador.post('/recuperarpassword',recuperarPasswordAdministrador)

routerAdministrador.get('/recuperarpassword/:token',comprobarTokenPasswordAdministrador)

routerAdministrador.post('/nuevopassword/:token',crearNuevoPasswordAdministrador)

routerAdministrador.post ('/login',loginAdministrador)

export default routerAdministrador;