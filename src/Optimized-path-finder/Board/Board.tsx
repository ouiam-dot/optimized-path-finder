import React, { useState } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import "./Board.css";
import { Tooltip } from "../tooltip/ToolTip";
import Astar from "../algorithm/Astar";
import { Menu } from "../menu/Menu";
import { IPath, pathColor, Square, SquareColors, IPoint } from "./interfaces";
import {
  CellSize,
  getBrowserPathPointsInCanvasFormat,
  getSquareRightCornerBrowserCoordinates,
  isDotInBoardLimit,
} from "./helpers";
//Create Board
export const Board = () => {
  const [board] = useState(
    new Array(15).fill(0).map((row) => new Array(15).fill(0))
  );
  const [squares, setSquares] = useState<Square[]>([]);
  const [path, setPath] = useState<IPath>();
  const getMatrix = () => {
    const rows: number[][] = [];
    board.forEach((row, rowIdx) => {
      const cells: number[] = [];
      row.forEach((cell, cellIdx) => {
        const square = squares.find(
          (s) => s.center.y === rowIdx && s.center.x === cellIdx
        );
        if (!square) {
          cells.push(0);
        } else if (square.type === "wall") {
          cells.push(1);
        } else cells.push(0);
      });
      rows.push(cells);
    });
    return rows;
  };
  const addSquare = (square: Square) => {
    // setPath(undefined);
    const oldSquareIndex = squares.findIndex(
      (s) => s.center.x === square.center.x && s.center.y === square.center.y
    );
    if (oldSquareIndex >= 0) {
      // delete the old square
      if (oldSquareIndex >= 0) squares.splice(oldSquareIndex, 1);
    }

    setSquares([...squares, square]);
  };
  const clearAll = () => {
    setPath(undefined);
    setSquares([]);
  };
  const clearWalls = () => {
    const newSquares: Square[] = [];
    squares.forEach((square) => {
      if (square.type !== "wall") newSquares.push(square);
    });
    setSquares(newSquares);
  };
  const search = () => {
    setPath(undefined);
    const start = squares.find((s) => s.type === "start");
    const end = squares.find((s) => s.type === "end");
    if (start && end) {
      const matrix = getMatrix();
      console.log(matrix);
      const algorithm = new Astar(matrix);
      const result = algorithm.finShortestPath(
        {
          x: start.center.x,
          y: start.center.y,
        },
        {
          x: end.center.x,
          y: end.center.y,
        }
      );
      const shortestPath = getPathPoints(result);
      setPath(shortestPath);
    }
  };
  const getPathPoints = (algorithmResult: number[][]): IPath => {
    const path: IPath = { points: [] };
    algorithmResult.forEach((point: number[]) => {
      path.points.push({
        x: point[0],
        y: point[1],
      });
    });

    return path;
  };
  const getDotColor = (dot: IPoint): string => {
    const findSquare = squares.find(
      (square) => square.center.x === dot.x && square.center.y === dot.y
    );
    if (findSquare) {
      if (findSquare.type === "start") return SquareColors.start;
      else if (findSquare.type === "end") return SquareColors.end;
      else return SquareColors.wall;
    } else {
      // check if there's a path cross this dot
      if (path) {
        const findPoint = path.points.find(
          (point) => point.x === dot.x && point.y === dot.y
        ); // TODO: check all paths
        if (findPoint) {
          return pathColor;
        }
      }
      return SquareColors.wall;
    }
  };
  return (
    <div id="board" className="board">
      <Menu
        onStartSearch={search}
        clearAll={clearAll}
        clearWalls={clearWalls}
      />
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => {
            const dot: IPoint = { x: cellIndex, y: rowIndex };
            return (
              <div key={dot.x} className="cell">
                {!isDotInBoardLimit(dot, row.length, board.length) && (
                  <div
                    className="dot"
                    style={{
                      backgroundColor: getDotColor(dot),
                    }}
                    onClick={() => {
                      console.log(`x :${dot.x} , y: ${dot.y}`);
                    }}
                  >
                    <Tooltip
                      onSetEnd={() => {
                        addSquare({
                          center: dot,
                          type: "end",
                          color: SquareColors.end,
                        });
                      }}
                      onSetStart={() => {
                        addSquare({
                          center: dot,
                          type: "start",
                          color: SquareColors.start,
                        });
                      }}
                      onSetWall={() => {
                        addSquare({
                          center: dot,
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
            const rightCorner = getSquareRightCornerBrowserCoordinates(square);
            return (
              <Rect
                x={rightCorner.x}
                y={rightCorner.y}
                width={CellSize}
                height={CellSize}
                onClick={(e) => { }}
                fill={square.color}
              />
            );
          })}
          {path && (
            <Line
              points={getBrowserPathPointsInCanvasFormat(path)}
              // tension={0.1}
              stroke={pathColor}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Board;
