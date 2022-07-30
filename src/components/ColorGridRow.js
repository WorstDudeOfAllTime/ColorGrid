import ColorSquare from "./ColorSquare";
import { useState } from "react";
import "./ColorGridRow.css";
const ColorGridRow = () => {
  const [color, setColor] = useState("black");
  let colorArray = ["pink", "blue"];
  const blackOrWhite = () => {
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randColor;
  };
  function getColor() {
    setColor(blackOrWhite());
  }
  setInterval(() => {
    getColor();
  }, 4000);
  let theColors = [];
  for (let i = 0; i < 150; i++) {
    theColors.push(<ColorSquare color={color} />);
  }
  return (
    <div className="grid-row">
      {theColors.map((item) => {
        return item;
      })}
    </div>
  );
};
export default ColorGridRow;
