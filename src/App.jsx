import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = (num) => {
    setCount((prevCount) => prevCount + num);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{`Count: ${count}`}</p>
      <button onClick={() => handleChange(1)}>Increment</button>
      <button onClick={() => handleChange(-1)}>Decrement</button>
    </div>
  );
}

export default App;
