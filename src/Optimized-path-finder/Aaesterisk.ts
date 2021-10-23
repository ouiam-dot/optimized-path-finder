import { AStarFinder } from "astar-typescript";
import {  IPoint } from "astar-typescript/dist/interfaces/astar.interfaces";

// let myMatrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 1, 1, 0, 1, 1, 0],
//     [0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0],
//     [1, 1, 1, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0]
//   ];
// let startPos = { x: 0, y: 0 };
// let goalPos = { x: 4, y: 5 };
class Aaesterisk {

private aStarInstance: AStarFinder;

constructor() { 
    this.aStarInstance = new AStarFinder({
        grid: {
        //   matrix: myMatrix
        }
      });
     }


public finShortestPath(startPos: IPoint, goalPos: IPoint): number[][] {
    return this.aStarInstance.findPath(startPos, goalPos);
}
}
export default Aaesterisk;