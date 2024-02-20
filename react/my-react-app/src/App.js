// App.js in React application
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.text())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from backend: {backendData}</p>
      </header>
    </div>
  );
}

export default App;
