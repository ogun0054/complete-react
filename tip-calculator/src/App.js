import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, SetBill] = useState("");

  return (
    <div>
      <BillInput bill={bill} onSetBill={SetBill} />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>

      <Output />
      <Reset />
      {/* <h2>How did your friend like the service??</h2>
      <select>
        <option value="excellent">Excellent - 20%</option>
        <option value="good">Good - 15%</option>
        <option value="average">Average - 10%</option>
        <option value="poor">Poor - 5%</option>
      </select> */}
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="number" placeholder="Enter bill amount" />
    </div>
  );
}
function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied - (0%)</option>
        <option value="5">It was Okay - (5%)</option>
        <option value="10">It was good - 10%</option>
        <option value="20">Absolutely amazing - 20%</option>
      </select>
    </div>
  );
}
function Output() {
  return (
    <div>
      <h3>You pay $Price (Price + Tip%)</h3>
    </div>
  );
}
function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
