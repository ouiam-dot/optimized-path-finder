export interface Square {
    center: IPoint;
    type: "wall" | "start" | "end";
    color: SquareColors;
  }
 export enum SquareColors {
    wall = "#6e97cc",
    start = "#3CE1BB",
    end = "#ff4154",
  }
export const pathColor = "#3CE1BB";
export interface IPoint {
    x: number;
    y: number;
  }
 export interface IPath {
    points: IPoint[];
    // canvasPoints: number[];
  }