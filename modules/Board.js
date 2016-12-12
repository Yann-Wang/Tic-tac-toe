/**
 * Created by a_wav on 2016/12/12.
 */
import React from 'react'
import Square from './Square'

class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    renderSquare(i,c) {
        return <Square key={c} value={this.props.squares[i]} onClick={(e) => this.props.onClick(i,e)}/>;
    }

    renderBoard(){
        let i,j,row,board=[];

        for(i=0;i<3;++i){
            row = [];

            for(j=0;j<3;++j){
                row[j] = this.renderSquare(i*3+j,j);
            }

            board[i] = (<div className="board-row" key={i}>{row}</div>);
        }

        return (
            <div ref={(brd) => this.brd = brd }>
                {board}
            </div>
        );
    }

    render() {
        return this.renderBoard();
    }
    calcCoordinate(i){
        return {
            x:parseInt((i)/3),
            y:parseInt((i)%3)
        };
    }

    boardWinnerFocus(arr) {
        let children = this.brd.children;
        let len = children.length;
        let row,column,coor;

        if(arr){
            arr = arr.lines;

            for(let i=0;i<arr.length;++i){
                coor = this.calcCoordinate(arr[i]);
                row = children[coor.x];
                column = row.children[coor.y];
                column.classList.add('board-winner-focus');
            }
        }else{
            for (let i = 0; i < len; ++i) {
                row = children[i];
                column = row.children;

                for(let j=0;j<column.length;++j){
                    column[j].classList.remove('board-winner-focus');
                }
            }
        }
    }

    componentDidUpdate() {
        this.boardWinnerFocus(this.props.winner);
    }
}

export default Board;