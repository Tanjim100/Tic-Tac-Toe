import { useState } from "react";
import Board from "./Board";
import './Game.css';

export default function Game()
{

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    console.log(currentSquares);

    function handlePlay(nextSquares)
    {
        // to do 
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove)
    {
        setCurrentMove(nextMove);
        
    }

    const moves = history.map((squares, move) => {
        let description;
        if(move > 0) description = 'Go to the move #' + move;
        else description = 'Go to game start';

        // console.log(move);

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div>
                <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handlePlay} ></Board>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}