import React from "react";
import "./styles.css";
interface MenuProps {
  onStartSearch: () => void;
  clearAll: () => void;
  clearWalls: () => void;
}
export const Menu = (props: MenuProps) => {
  return (
    <div id="play_panel">
      <button
        className="menu-button"
        onClick={() => {
          props.onStartSearch();
        }}
      >
        Start Search
      </button>
      <button
        className="menu-button"
        onClick={() => {
          props.clearAll();
        }}
      >
        Clear All
      </button>
      <button
        className="menu-button"
        onClick={() => {
          props.clearWalls();
        }}
      >
        Clear Walls
      </button>
    </div>
  );
};
