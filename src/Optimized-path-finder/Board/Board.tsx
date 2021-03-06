import React, { useState } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import "./Board.css";
import { Tooltip } from "../tooltip/ToolTip";
import { Menu } from "../menu/Menu";
import {
  IPath,
  pathColor,
  Square,
  SquareColors,
  IPoint,
  pathShortestColor,
} from "./interfaces";
import {
  CellSize,
  getBrowserPathPointsInCanvasFormat,
  getSquareRightCornerBrowserCoordinates,
  isDotInBoardLimit,
} from "./helpers";
import { pathfinding } from "../../App";
//Create Board
export const Board = () => {
  const [board] = useState(
    new Array(15).fill(0).map((row) => new Array(15).fill(0))
  );
  const [squares, setSquares] = useState<Square[]>([]);
  //nts; paths will hold the state and setPaths is the method that will allow us to update the IPath[] state.
  const [paths, setPaths] = useState<IPath[]>([]);
  const [start, setStart] = useState<Square>();
  const [end, setEnd] = useState<Square>();
  const [showAllPaths, setShowAllPaths] = useState<boolean>();

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
        } else if (square.type === "start" && square !== start) cells.push(1);
        else if (square.type === "end" && square !== end) cells.push(1);
        else cells.push(0);
      });
      rows.push(cells);
    });
    return rows;
  };
  const isThePointInAPath = (point: IPoint): boolean => {
    const findPath = paths.find((path) =>
      path.points.find((p) => p.x === point.x && p.y === point.y)
    );
    if (findPath && (findPath.isShortest || showAllPaths)) return true;
    else return false;
  };
  const addSquare = (square: Square) => {
    // setPath(undefined);
    const oldSquareIndex = squares.findIndex(
      (s) => s.center.x === square.center.x && s.center.y === square.center.y
    );
    console.log(isThePointInAPath(square.center));
    if (oldSquareIndex >= 0) {
      const oldSquare = squares[oldSquareIndex];
      if (oldSquare.type === "start" || oldSquare.type === "end") {
        // do nothing
        return;
      }
    } else if (isThePointInAPath(square.center)) {
      // do nothing
      return;
    }
    if (square.type === "start") {
      if (start) {
        const oldStartIndex = squares.findIndex(
          (s) => s.center.x === start.center.x && s.center.y === start.center.y
        );
        squares.splice(oldStartIndex, 1);
        setStart(square);
      } else {
        setStart(square);
      }
    } else if (square.type === "end") {
      if (end) {
        const oldEndIndex = squares.findIndex(
          (s) => s.center.x === end.center.x && s.center.y === end.center.y
        );
        squares.splice(oldEndIndex, 1);
        setEnd(square);
      } else {
        setEnd(square);
      }
    } else {
    }
    if (oldSquareIndex >= 0) {
      // delete the old square
      squares.splice(oldSquareIndex, 1);
    }

    setSquares([...squares, square]);
  };
  const clearAll = () => {
    setPaths([]);
    setStart(undefined);
    setEnd(undefined);
    setSquares([]);
  };
  const clearWalls = () => {
    const newSquares: Square[] = [];
    squares.forEach((square) => {
      if (square.type !== "wall") newSquares.push(square);
    });
    setSquares(newSquares);
  };
  const search = async () => {
    if (start && end) {
      const matrix = getMatrix();
      console.log(matrix);
      const result = await pathfinding({
        start: start.center,
        end: end.center,
        grid: matrix,
      });
      const shortestPaths: IPath[] = result.data as IPath[];
      console.log(shortestPaths);
      // const algorithm = new Astar(matrix);
      /*       const result = algorithm.finShortestPath(
        {
          x: start.center.x,
          y: start.center.y,
        },
        {
          x: end.center.x,
          y: end.center.y,
        }
      ); */
      //  const shortestPath = getPathPoints(result);
      // const shortPath = shortestPath.find((path) => path.isShortest);
      //setPaths([...paths, ...shortestPath]);
      setPaths([...paths, ...shortestPaths]);
      setStart(undefined);
      setEnd(undefined);
    }
  };

  const getDotColor = (dot: IPoint): string => {
    const findSquare = squares.find(
      (square) => square.center.x === dot.x && square.center.y === dot.y
    );
    if (findSquare) {
      if (findSquare.type === "start") return SquareColors.start;
      else if (findSquare.type === "end") return SquareColors.end;
      else return SquareColors.wall;
    } else if (isThePointInAPath(dot)) {
      // check if there's a path cross this dot
      return pathColor;
    }
    return SquareColors.wall;
  };

  return (
    <div className="ctn-board">
      <div id="board" className="board">
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
              const rightCorner =
                getSquareRightCornerBrowserCoordinates(square);
              return (
                <Rect
                  x={rightCorner.x}
                  y={rightCorner.y}
                  width={CellSize}
                  height={CellSize}
                  onClick={(e) => {}}
                  fill={square.color}
                />
              );
            })}
            {paths
              .filter((path) => path.isShortest)
              .map((path) => (
                <Line
                  points={getBrowserPathPointsInCanvasFormat(path)}
                  strokeWidth={4}
                  // tension={0.1}
                  stroke={pathShortestColor}
                />
              ))}
            {showAllPaths &&
              paths
                .filter((path) => !path.isShortest)
                .map((path) => (
                  <Line
                    points={getBrowserPathPointsInCanvasFormat(path)}
                    strokeWidth={4}
                    // tension={0.1}
                    stroke={pathColor}
                  />
                ))}
          </Layer>
        </Stage>
      </div>
      <Menu
        onStartSearch={search}
        clearWalls={clearWalls}
        clearAll={clearAll}
        ShowAllPaths={() => setShowAllPaths(!showAllPaths)}
      />
    </div>
  );
};

export default Board;
