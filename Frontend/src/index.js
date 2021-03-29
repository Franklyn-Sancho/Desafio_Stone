import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Signup from './components/template/Signup';

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  		<Route path='/login' component={App} />
		<Route path='/signup' component={Signup} />
	</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
