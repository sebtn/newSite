let express = require('express')
let app = express()
const port = process.env.PORT || 3000

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

app.use(express.static('public'))
app.listen(port, serverExpressFn = () => {
	console.log('Express is now running your: ' + port)
})