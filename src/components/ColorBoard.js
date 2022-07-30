import ColorGridRow from "./ColorGridRow";
import "./ColorBoard.css";
import { useState } from "react";
const ColorBoard = () => {
  const [color, setColor] = useState("black");
  let colors = ["pink", "blue"];
  let colorArray = [];
  const blackOrWhite = () => {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
  };
  function getColor() {
    setColor(blackOrWhite());
  }
  setInterval(() => {
    getColor();
  }, 4000);

  for (let i = 0; i < 100; i++) {
    colorArray.push(<ColorGridRow />);
  }
  return (
    <div className="color-board">
      <div className="floating-square" style={{ background: color }}></div>
      {colorArray.map((item) => {
        return item;
      })}
    </div>
  );
};

export default ColorBoard;
