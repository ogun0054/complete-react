import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <h2>How much was the bill?</h2>
      <input type="number" placeholder="Enter bill amount" />
      <h2>How did you like the service?</h2>
      <select>
        <option value="excellent">Excellent - 20%</option>
        <option value="good">Good - 15%</option>
        <option value="average">Average - 10%</option>
        <option value="poor">Poor - 5%</option>
      </select>
      <h2>How many people are sharing the bill?</h2>
      <input type="number" placeholder="Enter number of people" />

      <h1>You pay $Price (Price + Tip%)</h1>
      <button>Reset</button>
    </div>
  );
}
