import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import wordDayRoutes from './src/routes/index.js'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json())

app.use('/word-of-the-day', wordDayRoutes)
app.get('/', (req, res, next) => res.send('Welcome to the Word of the Day API!'))
app.all('*', (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
)

app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
