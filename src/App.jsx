import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState([]);
  const handleEquals = () => {
      const str = input.join("");
      const result = eval(str);
      setInput([result]);
  }
  const handlePlusOne = () => {
      const result = eval(input.join("") + "+1");
      setInput([result])
  }

  const handleMinusOne = () => {
      const result = eval(input.join("") + "-1");
      setInput([result])
  }
  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={handlePlusOne}>+1</button>
          <button className="decrement" onClick={handleMinusOne}>-1</button>
        </div>
        <div className="buttons">
          <button onClick={() =>setInput(() => [...input, "1"])}>1</button>
          <button onClick={() =>setInput(() => [...input, "2"])}>2</button>
          <button onClick={() =>setInput(() => [...input, "3"])}>3</button>
          <button className="operator" onClick={() =>setInput(() => [...input, "+"])}>+</button>
          <button onClick={() =>setInput(() => [...input, "4"])}>4</button>
          <button onClick={() =>setInput(() => [...input, "5"])}>5</button>
          <button onClick={() =>setInput(() => [...input, "6"])}>6</button>
          <button className="operator" onClick={() =>setInput(() => [...input, "-"])}>-</button>
          <button onClick={() =>setInput(() => [...input, "7"])}>7</button>
          <button onClick={() =>setInput(() => [...input, "8"])}>8</button>
          <button onClick={() =>setInput(() => [...input, "9"])}>9</button>
          <button className="operator" onClick={() =>setInput(() => [...input, "*"])}>×</button>
          <button onClick={() =>setInput(() => [...input, "0"])}>0</button>
          <button onClick={() =>setInput(() => [...input, "."])}>,</button>
          <button className="equals" onClick={handleEquals}>=</button>
          <button className="operator" onClick={() =>setInput(() => [...input, "/"])}>÷</button>
          <button className="clear" onClick={() =>setInput(() => [])}>C</button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events
          handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
