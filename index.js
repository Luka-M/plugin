

module.exports = function startServer(port) {
	const express = require('express')
	const app = express()

	app.get('/', (req, res) => {
	  res.send('<h1><button>Do stuff</button><button>Do other stuff</button></h1>')
	})

	app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
	})	
}
