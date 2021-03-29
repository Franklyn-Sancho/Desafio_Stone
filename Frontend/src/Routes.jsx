import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Login from './components/template/Login'
import Signup from './components/template/Signup'

export default props =>
 <Switch>
     <Route exact path='/' component={Login} />
     <Route path='/signup' component={Signup} />
     <Redirect from='*' to='/' />
 </Switch>