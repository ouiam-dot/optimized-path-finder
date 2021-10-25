import React, { useState } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import "./Board.css";
import { Tooltip } from "../tooltip/ToolTip";
import Aaesterisk from "../Aaesterisk";
interface Square {
  center: Point;
  rightCorner: Point;
  type: "wall" | "start" | "end";
  color: string;
}
enum SquareColors {
  wall = "#6e97cc",
  start = "#3CE1BB",
  end = "#ff4154",
}
interface Point {
  x: number;
  cell: number;
  row: number;
  y: number;
}
interface IPath {
  points: Point[];
  canvasPoints: number[];
}
export const Board = () => {
  const [board] = useState(
    new Array(20).fill(0).map((row) => new Array(20).fill(0))
  );
  const [squares, setSquares] = useState<Square[]>([]);
  const [path, setPath] = useState<IPath>();
  const getMatrix = () => {
    const rows: number[][] = [];
    board.forEach((row, rowIdx) => {
      const cells: number[] = [];
      row.forEach((cell, cellIdx) => {
        const square = squares.find(
          (s) => s.center.row === rowIdx + 1 && s.center.cell === cellIdx
        );
        if (!square) {
          cells.push(0);
        } else if (square.type === "wall") {
          cells.push(1);
        }
      });
      rows.push(cells);
    });
    return rows;
  };
  // const [boardStart ,setBoardStart] = useState<Point>();
  const addSquare = (square: Square) => {
    setPath(undefined);
    const oldSquareIndex = squares.findIndex(
      (s) =>
        s.center.row === square.center.row &&
        s.center.cell === square.center.cell
    );
    if (oldSquareIndex >= 0) {
      if (oldSquareIndex >= 0) squares.splice(oldSquareIndex, 1);
    }
    if (square.type === "start") {
      const oldStartIndex = squares.findIndex((s) => s.type === "start");
      if (oldStartIndex >= 0) squares.splice(oldStartIndex, 1);
    }
    if (square.type === "start") {
      const oldStartIndex = squares.findIndex((s) => s.type === "start");
      if (oldStartIndex >= 0) squares.splice(oldStartIndex, 1);
    }
    if (square.type === "end") {
      const oldEndIndex = squares.findIndex((s) => s.type === "end");
      if (oldEndIndex >= 0) squares.splice(oldEndIndex, 1);
    }
    setSquares([...squares, square]);

    const start = squares.find((s) => s.type === "start");
    const end = squares.find((s) => s.type === "end");
    if (start && end) {
      const matrix = getMatrix();
      const algorithm = new Aaesterisk(matrix);
      const result = algorithm.finShortestPath(
        {
          x: start.center.cell - 1,
          y: start.center.row - 1,
        },
        {
          x: end.center.cell - 1,
          y: end.center.row - 1,
        }
      );
      const shortestPath = convertPathPoints(result);
      setPath(shortestPath);
    }
  };
  const convertPathPoints = (algorithmResult: number[][]): IPath => {
    const path: IPath = { points: [], canvasPoints: [] };
    const boardStart = getPos(document.getElementById("board"));
    algorithmResult.forEach((point: number[]) => {
      path.points.push({
        x: (point[0] + 1) * 50 + boardStart.x,
        y: (point[1] + 1) * 50 + boardStart.y,
        cell: point[0] + 1,
        row: point[1] + 1,
      });
    });
    path.points.forEach((point) => {
      path.canvasPoints.push(point.x);
      path.canvasPoints.push(point.y);
    });
    return path;
  };
  const getDotColor = (cell: number, row: number): string => {
    const findSquare = squares.find(
      (square) =>
        square.center.cell === cell + 1 && square.center.row === row + 1
    );
    if (findSquare) {
      if (findSquare.type === "start") return SquareColors.start;
      else if (findSquare.type === "end") return SquareColors.end;
      else return SquareColors.wall;
    } else return SquareColors.wall;
  };
  return (
    <div id="board" className="board">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cell, cellIdx) => {
            return (
              <div key={cellIdx} className="cell">
                {cellIdx + 1 !== row.length && rowIdx + 1 !== board.length && (
                  <div
                    className="dot"
                    style={{ backgroundColor: getDotColor(cellIdx, rowIdx) }}
                  >
                    <Tooltip
                      onSetEnd={() => {
                        const boardStart = getPos(
                          document.getElementById("board")
                        );
                        addSquare({
                          center: {
                            x: (cellIdx + 1) * 50 + boardStart.x,
                            y: (rowIdx + 1) * 50 + boardStart.y,
                            cell: cellIdx + 1,
                            row: rowIdx + 1,
                          },
                          rightCorner: {
                            x: cellIdx * 50 + 25 + boardStart.x,
                            y: rowIdx * 50 + 25 + boardStart.y,
                            cell: cellIdx,
                            row: rowIdx,
                          },
                          type: "end",
                          color: SquareColors.end,
                        });
                      }}
                      onSetStart={() => {
                        const boardStart = getPos(
                          document.getElementById("board")
                        );
                        addSquare({
                          center: {
                            x: (cellIdx + 1) * 50 + boardStart.x,
                            y: (rowIdx + 1) * 50 + boardStart.y,
                            cell: cellIdx + 1,
                            row: rowIdx + 1,
                          },
                          rightCorner: {
                            x: cellIdx * 50 + 25 + boardStart.x,
                            y: rowIdx * 50 + 25 + boardStart.y,
                            cell: cellIdx,
                            row: rowIdx,
                          },
                          type: "start",
                          color: SquareColors.start,
                        });
                      }}
                      onSetWall={() => {
                        const boardStart = getPos(
                          document.getElementById("board")
                        );
                        addSquare({
                          center: {
                            x: (cellIdx + 1) * 50 + boardStart.x,
                            y: (rowIdx + 1) * 50 + boardStart.y,
                            cell: cellIdx + 1,
                            row: rowIdx + 1,
                          },
                          rightCorner: {
                            x: cellIdx * 50 + 25 + boardStart.x,
                            y: rowIdx * 50 + 25 + boardStart.y,
                            cell: cellIdx,
                            row: rowIdx,
                          },
                          type: "wall",
                          color: SquareColors.wall,
                        });
                      }}
                    />
                  </div>
                )}
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
                x={square.rightCorner.x}
                y={square.rightCorner.y}
                width={50}
                height={50}
                onClick={(e) => {}}
                fill={square.color}
              />
            );
          })}
          {path && (
            <Line
              points={path.canvasPoints}
              tension={0.1}
              stroke={SquareColors.start}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};
function getPos(element: any) {
  // yay readability
  for (
    var lx = 0, ly = 0;
    element != null;
    lx += element.offsetLeft,
      ly += element.offsetTop,
      element = element.offsetParent
  );
  return { x: lx, y: ly };
}
export default Board;
