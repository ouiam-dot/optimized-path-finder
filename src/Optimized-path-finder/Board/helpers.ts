import { IPoint } from "astar-typescript/dist/interfaces/astar.interfaces";
import { IPath, Square } from "./interfaces";
export const CellSize = 50;

// If a dot was in board limit, it shouldn't be clickable
export function isDotInBoardLimit(
    dot: IPoint,
    cellsLength: number,
    rowsLength: number
  ): boolean {
    return dot.x + 1 === cellsLength || dot.y + 1 === rowsLength;
  }
// Convert from board's coordinates to browser's coordinates 
 export function getBrowserPathPointsInCanvasFormat(path: IPath): number[] {
    const results: number[] = [];
    const repereOrigine = getRepereOriginBrowserCoordinates();
  
    path.points.forEach((p) => {
      const browserCoordinates: IPoint = {
        x: p.x * CellSize + repereOrigine.x,
        y: p.y * CellSize + repereOrigine.y,
      };
      results.push(browserCoordinates.x);
      results.push(browserCoordinates.y);
    });
    return results;
  }
//Get corners coordinates in origin repere
 export  function getSquareRightCornerBrowserCoordinates(square: Square): IPoint {
    const repereOrigine = getRepereOriginBrowserCoordinates();
    return {
      x: square.center.x * CellSize - CellSize / 2 + repereOrigine.x,
      y: square.center.y * CellSize - CellSize / 2 + repereOrigine.y,
    };
  }
//
 export function getRepereOriginBrowserCoordinates(): IPoint {
    const boardStart = getBrowserCoordinatesOfHtmlElement(
      document.getElementById("board")
    ); // board start
    return { x: boardStart.x + CellSize, y: boardStart.y + CellSize };
  }
  //To get coordinates of any html elemnt in browser repere
  // copied from stackoverflow
 export function getBrowserCoordinatesOfHtmlElement(element: any) {
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
  