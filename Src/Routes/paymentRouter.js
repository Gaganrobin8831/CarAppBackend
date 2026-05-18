import express from 'express'
import { Carpay, getPayments, getUserPayments, updatePayment, deletePayment } from '../Controller/paymentController.js'
 
const paymentRouter = express.Router()

paymentRouter.post('/', Carpay)
paymentRouter.get('/', getPayments)
paymentRouter.get('/user/:userId', getUserPayments)
paymentRouter.put('/:id', updatePayment)
paymentRouter.delete('/:id', deletePayment)

export default paymentRouter