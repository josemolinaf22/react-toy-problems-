import React, { useState } from "react";

function Sum() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, SetSum] = useState(null);

  const updateNumber1 = (value) => setNumber1(value);
  const updateNumber2 = (value) => setNumber2(value);

  const add = () => {
    let newSum = +number1 + +number2;
    SetSum(newSum);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum</h4>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => updateNumber1(e.target.value)}
      />
      <input
        type="text"
        className="inputLine"
        onChange={(e) => updateNumber2(e.target.value)}
      />
      <button className="confirmationButton" onClick={add}>
        {" "}
        Add{" "}
      </button>
      <span className="resultsBox"> Sum: {sum}</span>
    </div>
  );
}

export default Sum;
