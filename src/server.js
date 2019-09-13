import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send({ message: 'hello' })
})

app.get('/data', (req, res) => {
  res.status(200).send({ message: 'you hit the data endpoint' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(201).send({ message: 'ok' })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.status(201).send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
}
