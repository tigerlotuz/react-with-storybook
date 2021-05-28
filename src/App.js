import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import React, { useState } from "react";

function App(props) {
  const [message, setMessage] = useState("");

    const inputsHandler = (e) => {
      e.preventDefault();
      setMessage(e.target.value);
  }
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(`Your message: ${message}`);
  };
  return (
    <div className="App">
      <header className="App-header">

        <Button onClick={handleOnClick} children="Submit" />

        <Input
          type="text"
          value={message}
          onChange={inputsHandler}
          placeholder="write a message.."
        />

        <p>Learning to use Storybook</p>
      </header>
    </div>
  );
}

export default App;
