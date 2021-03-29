import React, {Component} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import api from '../services/Api'


function submit() {
	document.dados.submit()
}

class Login extends Component {

	
	render() {
		return(
			<div className="login">
				<div className="login-page">
					<h1>Logar conta</h1>
					<p>
						Para se aventurar no mundo da Marvel, logue sua conta ou cadastra-se
					</p>
				</div>
				<div className="login-form">
					<h2>Login</h2>
					<form name="dados">
						<div>
							<label >E-mail</label>
							<input name="email" id="email" 
							placeholder="Husky@dogmail" 
							name="email">
							</input>
						</div>
						<div>
							<label>Senha</label>
							<input name="password" id="password" 
							type="password" placeholder="********" 
							name="password">
							</input>
						</div>
							<button id="register" type="submit">Logar</button>
							<Link to="/signup">
							<button id="register" type="submit">Cadastrar</button>
							</Link>
					</form>
				</div>
			</div>
			)}
	}

export default Login
