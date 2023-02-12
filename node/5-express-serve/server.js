const express = require('express')
const app = express()
const env = {
  port: '8080'
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(env.port, (error) => {
  if(!error)
  {
    console.log(`Server is running on port ${env.port}`)
  }
  else
  {
    console.error(error)
  }
})
