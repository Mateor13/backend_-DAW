import {Router} from 'express'
import { createTourController, deleteTourController, getAllToursController, getTourController, updatedTourController } from '../controllers/tour_controller.js'
const router = Router()
router.get('/tours', getAllToursController)
router.post('/tours', createTourController)
router.put('/tours/:id', updatedTourController)
router.delete('/tours/:id', deleteTourController)
router.get('/tours/:id', getTourController)
export default router