import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.topHeading}>Order For Products</h1>
      <h2>Counter: {count}</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increase}>Increase</button>
        <button style={styles.button} onClick={decrease}>Decrease</button>
        <button style={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" },
  topHeading: { fontSize: "36px", marginBottom: "20px", color: "#111" },
  buttonContainer: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#111", color: "white" },
};

export default Counter;
