import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));

  const divide = () => {
    if (num2 == 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        Result: {result}
      </div>
    </div>
  );
}

export default Calculator;