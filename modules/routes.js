import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
//import Home from './Home'
import Tic_tac_toe from './Tic_tac_toe'

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Tic_tac_toe}/>
        {/*<Route path="/game" component={Tic_tac_toe}/>*/}
    </Route>
)
