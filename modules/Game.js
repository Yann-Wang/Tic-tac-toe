/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={(e) => this.props.onClick(i,e)}/>;
    }

    render() {


        return (
            <div>
                {/*<div className="status">{status}</div>*/}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                active:null
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick(i,e) {
        var history = this.state.history;
        const stepNumber = this.state.stepNumber;
        const current = history[stepNumber];
        const squares = current.squares.slice();
        //console.log(stepNumber);

        if(stepNumber != history.length-1){
            history = history.slice(0,stepNumber+1);
        }

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            stepNumber: history.length,
            history: history.concat([{
                squares: squares,
                active:{
                    x:parseInt((i)/3+1),
                    y:parseInt((i)%3+1)
                }
            }]),
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

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const coordinate = step.active ? "(" + step.active.x +"," + step.active.y + ")" : move;
            const desc = move ?
            'Move #' + coordinate :
                'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={(e) => this.jumpTo(move,e)}>{desc}</a>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i,e) => this.handleClick(i,e)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
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
            return squares[a];
        }
    }
    return null;
}

export default Game;