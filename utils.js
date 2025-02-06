async function getBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
      console.log(chunk)
    })

    req.on('end', () => {
      try {
        resolve(JSON.parse(body)) //! because it is a string not a javaScript code
      } catch (error) {
        reject(error)
      }
    })

    req.on('error', (error) => {
      reject(error)
    })
  })
}

module.exports = {
  getBody
}
