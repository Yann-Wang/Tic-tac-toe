/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'
import Board from './Board'
import MoveList from './MoveList'

class Game extends React.Component {
    constructor() {
        super();
        this.jumpTo = this.jumpTo.bind(this);
        this.state = {
            history: [{
                squares: (new Array(9)).fill(null),
                active:null
            }],
            xIsNext: true,
            stepNumber: 0,
            ascending:true
        };
    }

    handleClick(i,e) {
        let history = this.state.history;
        let stepNumber = this.state.stepNumber;
        let current,squares;

        current = history[stepNumber];
        squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        if(this.state.ascending){

            if(stepNumber != history.length-1){
                history = history.slice(0,stepNumber+1);
            }

            stepNumber = history.length;

            history = history.concat([{
                squares: squares,
                active:{
                    x:parseInt((i)/3+1),
                    y:parseInt((i)%3+1)
                }
            }])
        } else{

            let start = history.slice(0,1);
            history = history.slice(stepNumber);

            stepNumber = 1;

            history.unshift({
                squares: squares,
                active:{
                    x:parseInt((i)/3+1),
                    y:parseInt((i)%3+1)
                }
            });

            history.unshift(start);
        }

        this.setState({
            stepNumber: stepNumber,
            history: history,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step,e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
            e.preventDefault();
        }

        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    toggle(){
        let moves = this.state.history.slice();
        let len = moves.length;

        for (let i = 1, j = len - 1, tmp; i < len; ++i, --j) {
            if (i >= j) {
                break;
            }
            tmp = moves[i];
            moves[i] = moves[j];
            moves[j] = tmp;
        }

        this.setState({
            history: moves,
            stepNumber: this.state.history.length-1 - this.state.stepNumber +1,
            ascending: !this.state.ascending
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner.winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i,e) => this.handleClick(i,e)}
                        winner={winner}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={()=>this.toggle()}>toggle</button>
                    <MoveList history={history} jumpTo={this.jumpTo} stepNumber={this.state.stepNumber} ascending={this.state.ascending} />
                </div>
            </div>
        );
    }

    componentDidMount(){

        window.addEventListener('mousedown', function(e) {
            document.body.classList.add('mouse-navigation');
            document.body.classList.remove('kbd-navigation');
        });

        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 9) { // tab
                document.body.classList.add('kbd-navigation');
                document.body.classList.remove('mouse-navigation');
            }
        });

        /*window.addEventListener('click', function(e) {
         if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
         e.preventDefault();
         }
         });*/
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                lines:lines[i],
                winner:squares[a]
            };
        }
    }
    return null;
}

export default Game;