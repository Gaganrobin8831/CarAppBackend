import express from 'express'
import { Carbook, getBookings, getUserBookings, updateBooking, deleteBooking, getBookingById } from '../Controller/bookingController.js'
const bookingRouter = express.Router()

bookingRouter.post('/', Carbook)
bookingRouter.get('/', getBookings)
bookingRouter.get('/:id', getBookingById)
bookingRouter.get('/user/:userId', getUserBookings)
bookingRouter.put('/:id', updateBooking)
bookingRouter.delete('/:id', deleteBooking)

export default bookingRouter