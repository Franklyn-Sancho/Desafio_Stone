import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'



export default props =>
	<login className="login">
		<div class="login-page">
			<h1>Logar conta</h1>
					<p>
						Para se aventurar no mundo da Marvel, logue sua conta ou cadastra-se
					</p>
				</div>
				<div class="login-form">
					<h2>Login</h2>
					<form name="dados">
						<div>
							<label for="email">E-mail</label>
							<input name="email" id="email" 
							placeholder="Husky@dogmail" 
							name="email" maxlength="80">
							</input>
						</div>
						<div>
							<label for="password">Senha</label>
							<input name="password" id="password" 
							type="password" placeholder="********" 
							name="password" maxlength="20">
							</input>

						</div>

						<button id="register" type="submit">Logar</button>
						<Link to="/signup">
						<button id="register" type="submit">Cadastrar</button>
						</Link>
					</form>
				</div>
			</login>