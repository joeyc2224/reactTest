import React from "react";
import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <MyButton />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <h1>fdaf</h1>
        
      </header>
    </div>
  );
}

export default App;
