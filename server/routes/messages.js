import express from 'express'
import  {createMassage, getMassages, getMassage, deleteMassage, updateMassage} from '../controllers/MessageController.js'

const router = express.Router()

router.get('/', getMassages)

router.get('/:id', getMassage)

router.post('/', createMassage)

router.delete('/:id', deleteMassage)

router.patch('/:id', updateMassage)

export default router