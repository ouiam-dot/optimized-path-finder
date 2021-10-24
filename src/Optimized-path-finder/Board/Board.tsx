import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";
import "./Board.css";
interface Square {
  x: number;
  y: number;
  rightCornerX: number;
  rightCornerY: number;
}
export const Board = () => {
  const [board] = useState(
    new Array(20).fill(0).map((row) => new Array(40).fill(0))
  );
  const [squares, setSquares] = useState<Square[]>([]);
  return (
    <>
      <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cell, cellIdx) => {
              return (
                <div key={cellIdx} className="cell">
                  {/* {cellIdx}: {rowIdx} */}
                  <div
                    className="dot"
                    onClick={(e) => {
                      setSquares([
                        ...squares,
                        {
                          x: (cellIdx + 1) * 50,
                          y: (rowIdx + 1) * 50,
                          rightCornerX: cellIdx * 50 + 25,
                          rightCornerY: rowIdx * 50 + 25,
                        },
                      ]);
                      // setSquares(squares);
                      // console.log(`${(rowIdx + 1) * 50} ${(cellIdx + 1) * 50}`);
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        ))}
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {squares.map((square) => {
              return (
                <Rect
                  x={square.rightCornerX}
                  y={square.rightCornerY}
                  width={50}
                  height={50}
                  fill={"#6e97cc"}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Board;
