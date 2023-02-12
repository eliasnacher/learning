const http = require('http')
const fs = require('fs')

const env = {
  'host': 'localhost',
  'port': '8080'
}

console.log('Server started at port ' + env.port)

http.createServer(function (req, res) {
  try {
    var html = fs.readFileSync('./index.html') 
  }
  catch (err) {
    throw new Error(err)
  }

  res.writeHead(200, {'Content-type': 'text/html'})
  res.write(html)
  res.end()
}).listen(env.port)
