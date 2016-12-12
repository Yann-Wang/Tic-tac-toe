/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'
import Errors from './Errors'
import Game from './Game'


class Tic_tac_toe extends React.Component {
    render() {
        return (
            <div>
                <div className="tic-tac-toe-profile">Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</div>
                <Errors/>
                <Game/>
            </div>
        );
    }
}

export default Tic_tac_toe;