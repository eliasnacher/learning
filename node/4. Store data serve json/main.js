const http = require('http')
const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: 'localhost', 
    user:'node', 
    database: 'node',
    password: 'phpIsBetter',
    connectionLimit: 5
})

console.log('Server started at http://localhost:8080')
http.createServer(function (req, res) {
  pool.getConnection()
    .then(conn => {
      conn.query('select * from user')
      .then((rows) => {
        res.writeHead(200, {'ContentType': 'application/json'})
        res.write(JSON.stringify(rows))
        res.end()
      })
      .catch(err => {
        res.writeHead(500, {'ContentType': 'application/json'})
        res.end()
      })
          })
}).listen(8080)
