import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChessBoard from './ChessBoard';

function App() {
  const [boardSize, setBoardSize] = useState(8);

  const handleBoardSize = (size) => {
    setBoardSize(size);
  }
  return (
    <div>
      <label >Enter Board Size</label>

      <input type='number' id='board-size' value={boardSize} onChange={(e) => handleBoardSize(e.target.value)}></input>

      <ChessBoard size={boardSize} />
    </div>
  );
}

export default App;
