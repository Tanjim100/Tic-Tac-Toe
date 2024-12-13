import Square from "./Square"
import './Board.css'
import { useState } from "react"

export default function Board({xIsNext, squares, onPlay})
{

    function handleClick(i)
    {
        if(squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares)
        // console.log(nextSquares);
    }

    const winner = calculateWinner(squares);
    console.log('the winner is ', winner);
    let status;
    if(winner) status = 'Winner: ' + winner;
    else status = (xIsNext ? 'X ' : 'O ') + 'Players turn.';

    return(
        <>
            <h1 className="status">{status}</h1>
            <div className="board-row">
                <Square value={squares[0]} onSuperClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onSuperClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onSuperClick={() => handleClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSuperClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} onSuperClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} onSuperClick={() => handleClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSuperClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} onSuperClick={() => handleClick(7)}></Square>
                <Square value={squares[8]} onSuperClick={() => handleClick(8)}></Square>
            </div>
        </>
    )
}



function calculateWinner(squares)
{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < lines.length; i++)
    {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a];
        }
        
    }
    return null;
}