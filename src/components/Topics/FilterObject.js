import React, { useState } from "react";

function FilterObject() {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray] = useState([
    { name: "Brian", title: "Mechanic", age: 23 },
    { name: "Chris", title: "Car Sales", hairColor: "brown" },
    { name: "Jose", title: "Web Developer", isCool: true },
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.hasOwnProperty(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        {" "}
        Original: {JSON.stringify(unfilteredArray)}
      </span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">
        Filtered: {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}

export default FilterObject;
