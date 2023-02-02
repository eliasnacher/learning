const http = require('http')
const env = {
  'host': 'localhost',
  'port': '8080'
}

console.log('Server started at port ' + env.port)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-type': 'plain/text'})
  res.write('Hello World')
  res.end()
}).listen(env.port)
