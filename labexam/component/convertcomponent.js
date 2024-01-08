import React, { useState } from 'react';

const Converter = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("kg");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (unit === "kg") {
      setResult(parseFloat(value) * 1000 + " grams");
    } else if (unit === "grams") {
      setResult(parseFloat(value) / 1000 + " kg");
    }
  };

  return (
    <div>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="kg">kg</option>
        <option value="grams">grams</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <p>{result}</p>
    </div>
  );
};

export default Converter;


