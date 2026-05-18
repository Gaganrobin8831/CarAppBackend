import express from 'express'
import { Carspecs, getAllCars, getCarById, updateCar, deleteCar } from '../Controller/carController.js'

const carRouter = express.Router()

carRouter.post('/specs',Carspecs)
carRouter.get('/',getAllCars)
carRouter.get('/:id',getCarById)
carRouter.put('/:id',updateCar)
carRouter.delete('/:id',deleteCar)

export default carRouter