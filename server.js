const express = require('express')
const next = require('next')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/robots.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'robots.txt'))
    })

    server.get('/api/v1/time', (req, res) => {
      res.send(new Date().toString())
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
