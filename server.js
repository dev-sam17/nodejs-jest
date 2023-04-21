const express = require('express')

const port = 3000

const app = express()

app.get('/test', (req, res) => {
  res.send('test')
})

app.listen(port, () => {
    console.log('server listing at port ', port)
})



