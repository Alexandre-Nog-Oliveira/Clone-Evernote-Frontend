import React  from "react";
import { Route, redirect } from 'react-router-dom';

const pivateRouter =({componet: Component, ...rest}) => (
    <Route {...rest} render={porps => (
        localStorage.getItem('user')
        ? <Component {...porps}/>
        : <redirect to={{pathname: '/login'}} />
    )}></Route>
)

export default pivateRouter;