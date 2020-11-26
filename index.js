

module.exports = function startServer(port) {
	const express = require('express')
	const app = express()
	const port = port

	app.get('/', (req, res) => {
	  res.send('Hello World!')
	})

	app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
	})	
}
