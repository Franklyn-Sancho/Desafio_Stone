import React, {useEffect, useState} from 'react'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Signup() {

	const [dados, setDados] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3333').then(response => {
			setDados(response.data)
		})
	}, [])

	const [campos, setCampos] = useState({
		Name: '',
		Email: '',
		Password: '',

	})

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value
		setCampos(campos)
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		axios.post('http://localhost:3333/signup', campos)
			.then(response => {
				alert(response.data.dados.length + 'cadastros')
			})
			
	}

	return (
		<div className="signup">
			<div className="signup-page">
					<h1>Cadastrar conta</h1>
						<p>
							Quase lá! basta preencher o formulário para salvar o mundo
						</p>
				</div>
				<div className="signup-form">
					<h2>Login</h2>
					<form name="dados" onSubmit={handleFormSubmit}>
						<div>
							<label>name or nick</label>
							<input type="text" name="Name" 
							placeholder="Husky@dogmail" 
							id="Name" 
							onChange={handleInputChange}>
							</input>
						</div>
						<div>
							<label>E-mail</label>
							<input name="Email" id="email" 
							placeholder="Husky@dogmail" 
							name="Email"
							onChange={handleInputChange}>
							</input>
						</div>
						<div>
							<label>Senha</label>
							<input name="Password" id="password" 
							type="password" placeholder="********" 
							name="Password"
							onChange={handleInputChange}>
							</input>

						</div>
						<button id="register" type="submit">Cadastrar</button>
						<Link to="/">
						<button id="register" type="submit">Login</button>
						</Link>
					</form>
				</div>
			</div>
)}
			
export default Signup





