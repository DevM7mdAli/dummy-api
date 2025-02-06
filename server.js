const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { getPost, getSinglePost, insertPostToDB } = require('./controllers/postController')
const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/api/post' && req.method === 'GET') {
    getPost(req, res)
  } else if (req.url === '/api/post' && req.method === 'POST') {
    insertPostToDB(req, res)
  } else if (req.url.match(/\/api\/post\/([0-9]+)/) && req.method === 'GET') {
    const id = req.url.split('/')[3]
    getSinglePost(req, res, id)
  } else {
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ message: "There is no message" }))
  }
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`)
  }))
  .catch((error) => console.log(error))
