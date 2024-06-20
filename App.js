import React, { useState } from 'react';
import NumberForm from './Form';
import ResultDisplay from './Result';
import './App.css';

function App() {
  const [results, setResults] = useState({
    prevwindow: [],
    currwindow: [],
    numbers: [],
    avg: 0,
  });

  const handleResults = (data) => {
    setResults(data);
  };

  return (
    <div className="App">
      <h1>Average Calculator HTTP Microservices</h1>
      <NumberForm onResults={handleResults} />
      <ResultDisplay results={results} />
    </div>
  );
}

export default App;
