import {Router} from 'express'
import { confirmarMailDocente, recuperarPasswordDocente, registroDocente, comprobarTokenPasswordDocente, crearNuevoPasswordDocente } from '../controllers/docente_controller.js'
const router = Router()

router.post('/registro',registroDocente)

router.get('/confirmar/:token', confirmarMailDocente)


router.post('/recuperarpassword',recuperarPasswordDocente)

router.get('/recuperarpassword/:token',comprobarTokenPasswordDocente)

router.post('/nuevopassword/:token',crearNuevoPasswordDocente)

export default router