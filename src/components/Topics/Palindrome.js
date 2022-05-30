import React, { useState } from "react";

function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const handleChange = (value) => setUserInput(value);

  const isPalindrome = () => {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("").reverse().join("");

    if (forwards === backwards) {
      setPalindrome("True");
    } else {
      setPalindrome("False");
    }
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => isPalindrome(userInput)}
      >
        Check
      </button>
      <span className="resultsBox"> Palindrome: {palindrome} </span>
    </div>
  );
}

export default Palindrome;
