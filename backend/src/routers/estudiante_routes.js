import {Router} from 'express'
import { confirmarMailEstudiante, recuperarPasswordEstudiante, registroEstudiante, comprobarTokenPasswordEstudiante, crearNuevoPasswordEstudiante } from '../controllers/estudiante_controller.js'
const router = Router()

router.post('/registro',registroEstudiante)

router.get('/confirmar/:token', confirmarMailEstudiante)

router.post('/recuperarpassword',recuperarPasswordEstudiante)

router.get('/recuperarpassword/:token',comprobarTokenPasswordEstudiante)

router.post('/nuevopassword/:token',crearNuevoPasswordEstudiante)

export default router