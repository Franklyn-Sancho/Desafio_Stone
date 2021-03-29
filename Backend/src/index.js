const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.json({message: "Novos cadastros", dados: users})
  
})

const users = []
app.post('/signup', (req, res, next) => {
	console.log("Novos Cadastros")
	users.push({
		nome: req.body.Name,
		email: req.body.Email,
		senha: req.body.Password
	})
	res.json({message: "Novos Cadastros", dados: users})
})
 

app.listen(3333, function () {
  console.log('Backend Running')
})