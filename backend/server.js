import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleWare.js'
import connectDB from './config/db.js'

import productsRoute from './routes/products-route.js'
import authRoute from './routes/user-routes.js'
import orderRoute from './routes/order-routes.js'
import uploadRoute from './routes/upload-routes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('App is running on localhost')
})

app.use('/api/products', productsRoute)
app.use('/api/users', authRoute)
app.use('/api/orders', orderRoute)
app.use('/api/upload', uploadRoute)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID),
)

const __dirname = path.resolve()
app.use('/upload', express.static(path.join(__dirname, '/upload')))

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4500

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
  ),
)