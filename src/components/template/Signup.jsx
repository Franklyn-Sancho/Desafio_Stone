import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


export default props =>
	<signup className="signup">
		<div class="signup-page">
			<h1>Cadastrar conta</h1>
					<p>
						Quase lá! basta preencher o formulário para salvar o mundo
					</p>
				</div>
				<div class="signup-form">
					<h2>Login</h2>
					<form  method="post" name="dados">
					<div>
							<label for="name">name or nick</label>
							<input name="name" id="name" 
							placeholder="Husky@dogmail" 
							name="email" maxlength="80">
							</input>
						</div>
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
						<div>
							<label for="email">Confirmar Senha</label>
							<input name="password" id="email" 
							placeholder="*******" 
							name="password" maxlength="20">
							</input>
						</div>
						<button id="register" type="submit">Cadastrar</button>
						<Link to="/">
						<button id="register" type="submit">Login</button>
						</Link>
					</form>
				</div>

	</signup>