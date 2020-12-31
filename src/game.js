import { Board } from "./board";
export function Game() {
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
  <div className="game">
    <div className="game-board">
      <Board index={i} onClick={() => { HandelClick(i) }} value={state}/>
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);
}



