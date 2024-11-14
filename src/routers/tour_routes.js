import {Router} from 'express'
import { createTourController, getAllToursController } from '../controllers/tour_controller.js'
const router = Router()
router.get('/tours', getAllToursController)
router.post('/tours', createTourController)
export default router