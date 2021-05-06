import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleWare.js'
import connectDB from './config/db.js'
import cors from 'cors'

import productsRoute from './routes/products-route.js'
import authRoute from './routes/user-routes.js'

dotenv.config()

connectDB()

const app = express()
// app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//   next()
// })

app.get('/', (req, res) => {
  res.send('api is runing')
})

app.use('/api/products', productsRoute)
app.use('/api/users', authRoute)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4500

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
  ),
)
