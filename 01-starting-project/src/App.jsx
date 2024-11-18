import { useState } from "react";

import Header from "./components/Header"
import User from "./components/User"
import Results from "./components/Results";

function App() {

  const [userInput, setUsetInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUsetInput(prevUserInput => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,  
        }
    });
}

  return (
    <>
      <Header />
      <User onChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
