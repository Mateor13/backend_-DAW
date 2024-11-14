import {Router} from 'express'
import { createTourController, getAllToursController, updatedTourController } from '../controllers/tour_controller.js'
const router = Router()
router.get('/tours', getAllToursController)
router.post('/tours', createTourController)
router.put('/tours/:id', updatedTourController)
export default router