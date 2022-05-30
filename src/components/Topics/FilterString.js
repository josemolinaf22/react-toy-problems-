import React, { useState } from "react";

function FilterString() {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray] = useState([
    "Brady",
    "Andrew",
    "Cameron",
    "Katie",
    "Michelle",
    "Jessica",
    "Athena",
    "Chalon",
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.includes(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        Unfiltered: {JSON.stringify(unfilteredArray)}
      </span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Check
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}

export default FilterString;
