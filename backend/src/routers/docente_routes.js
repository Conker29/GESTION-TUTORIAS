import {Router} from 'express'
import { confirmEmail, registro } from '../controllers/docente_controller.js'
const router = Router()


router.post('/registro',registro)

router.get('/confirmar/:token', confirmEmail)

export default router