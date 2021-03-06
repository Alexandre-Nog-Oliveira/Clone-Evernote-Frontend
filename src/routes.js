import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/Home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'
import pivateRouter from './components/auth/private_router';

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={HomeScreen}  />
    <Route exact path='/register' component={RegisterScreen}/>
    <Route exact path='/Login' component={LoginScreen}/>
    <Route exact path='/notes' component={NotesIndexScreen}/>
    <Route exact path='/user/edit' component={UserEditScreen}/>
    </Switch>
  </BrowserRouter>  
)

export default Routes;