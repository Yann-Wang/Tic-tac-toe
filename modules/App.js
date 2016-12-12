import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Tic-tac-toe</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex>Home-Tic_tac_toe</NavLink></li>
                    {/*<li><NavLink to="/game">Tic_tac_toe</NavLink></li>*/}
                </ul>
                {this.props.children}
            </div>
        )
    }
})
