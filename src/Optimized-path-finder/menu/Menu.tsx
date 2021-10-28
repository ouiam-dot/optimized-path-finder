import React from "react";
import { pathColor, pathShortestColor } from "../Board/interfaces";
import "./styles.css";
interface MenuProps {
  onStartSearch: () => void;
  clearAll: () => void;
  clearWalls: () => void;
  ShowAllPaths: () => void;
}
export const Menu = (props: MenuProps) => {
  return (
    <div id="play_panel">
      <p>Choose end node and start node on grid</p>
      <button
        className="menu-button"
        onClick={() => {
          props.onStartSearch();
        }}
      >
        Start search
      </button>
      <button
        className="menu-button"
        onClick={() => {
          props.clearAll();
        }}
      >
        Clear all
      </button>
      <button
        className="menu-button"
        onClick={() => {
          props.clearWalls();
        }}
      >
        Clear walls
      </button>
      <button
        className="menu-large-button"
        onClick={() => {
          props.ShowAllPaths();
        }}
      >
        Show all paths
      </button>
      <div className="map">
        <div className="map-item">
          <div
            className="line"
            style={{ backgroundColor: pathShortestColor }}
          ></div>
          <div className="instruction">The shortest path with minimal turns</div>
        </div>
        <div className="map-item">
          <div className="line" style={{ backgroundColor: pathColor }}></div>
          <div className="instruction">One of the shortest paths</div>
        </div>
        {/* <div className="map-item">
          <div className="line">
            <div
              className="square"
              style={{ backgroundColor: SquareColors.start }}
            ></div>
          </div>
          <div className="instruction"> Start</div>
        </div> */}
      </div>
    </div>
  );
};
