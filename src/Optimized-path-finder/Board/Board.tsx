import React, { useState } from "react";

import "./Board.css";
const BOARD_SIZE=15;

export const Board = () => {
  const [board] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );
  return (
    <>
      <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cell, cellIdx) => {
              return <div key={cellIdx} className="cell"></div>;
            })}
          </div>
        ))}
      </div>
    </>
  );
};


export default Board;
