import { AStarFinder } from "astar-typescript";

export interface IPoint {
  x: number;
  y: number;
}
class Astar {

private aStarInstance: AStarFinder;

constructor(matrix:number[][]) { 
    this.aStarInstance = new AStarFinder({
        grid: {
      matrix: matrix
        },
        includeStartNode: true,
        includeEndNode: false,
        diagonalAllowed:false,
      });
     }


public finShortestPath(startPos: IPoint, goalPos: IPoint): number[][] {
    return this.aStarInstance.findPath(startPos, goalPos);
}

/* public AStarPostSmoothing(path: number[][]): number[][]{
    let k=0;
    let  t : number[][];
    t.fill(path[0]);
    for i IN path.length:
        if !lineOfSight(t[k], path[i+1]){
          k++;
          t.push_back(path[i]);
        }     
    k++;
    t.push_back(path[n]);
    return t;
}*/
}


export default Astar;