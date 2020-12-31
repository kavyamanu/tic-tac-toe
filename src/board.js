import { Square } from "./square";
import { useState } from "react";
export function Board() {
  const [state, setstate] = useState([]);
  const [next, setnext] = useState("X");
  const newState = [...state];
  let finalWinner;
  const pair = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];
  function renderSquare(i) {
    return <Square index={i} onClick={() => { HandelClick(i) }} value={state} />;
  }
  function pairs(newState) {
    for (let i = 0; i < pair.length; i++) {
      const [a, b, c] = pair[i];
      if (newState[a] && newState[a] === newState[b] && newState[a] === newState[c]) {
        return newState[a];
      }
    }
  }
  let winner = pairs(newState);
  if (winner) {
    finalWinner = `Whee!Winner: ${winner}`;
  }
  else {
    finalWinner = `Next player: ${next}`;
  }
  function HandelClick(index) {
    if (winner) {
      return;
    }
    newState[index] = next === "X" ? "X" : "O";
    setstate(newState);
    setnext(next === "X" ? "O" : "X");
  }
  return (
    <div>
      <div className="status">{finalWinner}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
