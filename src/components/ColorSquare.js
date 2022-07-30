import { useState } from "react";
import "./ColorSquare.css";

const ColorSquare = ({ color }) => {
  const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
  return <div style={{ background: color }} className="square"></div>;
};

export default ColorSquare;
