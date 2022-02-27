import express from 'express'
import bodyParser from 'body-parser'

import wordDayRoutes from './routes/index.js'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())

app.use('/word-of-the-day', wordDayRoutes)
app.get('/', (req, res) => res.send('Welcome to the Word of the Day API!'))
app.all('*', (req, res) =>
  res.send("You've tried reaching a route that doesn't exist")
)

app.listen(app.get('port'), () => {
  console.log(`Server on port: http://localhost:${app.get('port')}`)
})
