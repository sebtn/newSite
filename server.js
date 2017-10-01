let express = require('express')
let app = express()

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

app.use(express.static('public'))
app.listen(3000, serverExpressFn = () => {
	console.log('Express is now running your //localhost:3000')
})