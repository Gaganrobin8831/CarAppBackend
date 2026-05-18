import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import ConnectDB from './Src/DB/database.js'
import userRouter from './Src/Routes/UserRouter.js'
import carrouter from './Src/Routes/carRouter.js'
import bookingRouter from './Src/Routes/bookingRouter.js'
import paymentRouter from './Src/Routes/paymentRouter.js'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/user',userRouter)
app.use('/car',carrouter)
app.use('/booking',bookingRouter)
app.use('/payment',paymentRouter)

ConnectDB()
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})