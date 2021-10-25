import React, { useState } from "react";
import "./toolTips.css";
interface TooltipProps {
  visible?: boolean;
  onSetStart: () => void;
  onSetEnd: () => void;
  onSetWall: () => void;
}
export const Tooltip = (props: TooltipProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <div className="wrapper" onClick={() => setVisible(true)}>
        <input type="checkbox" checked={visible} />
        {/* <div className="btn"></div> */}
        <div className="tooltip">
          <span
            onClick={(e) => {
              setVisible(false);
              props.onSetStart();
              e.stopPropagation();
            }}
          >
            Start
          </span>
          <span
            onClick={(e) => {
              setVisible(false);
              props.onSetWall();
              e.stopPropagation();
            }}
          >
            Wall
          </span>
          <span
            onClick={(e) => {
              setVisible(false);

              props.onSetEnd();
              e.stopPropagation();
            }}
          >
            End
          </span>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-01"
        >
          <path
            d="M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z"
            transform="translate(0 -2)"
          />
          <ellipse cx="13" cy="12.99" rx="4.52" ry="4.49" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-02"
        >
          <line x1="25" y1="12.58" x2="25" y2="9.42" />
          <line x1="21" y1="14.16" x2="21" y2="7.84" />
          <line x1="17" y1="15.74" x2="17" y2="6.26" />
          <line x1="13" y1="21" x2="13" y2="1" />
          <line x1="9" y1="17.32" x2="9" y2="4.68" />
          <line x1="5" y1="13.63" x2="5" y2="8.37" />
          <line x1="1" y1="11.53" x2="1" y2="10.47" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-03"
        >
          <polygon points="8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10" />
          <circle cx="8" cy="4" r="3" />
        </symbol>
      </svg>
    </>
  );
};
