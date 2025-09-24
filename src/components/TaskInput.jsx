import { useState } from "react";
import styles from "../styles/TaskInput.module.css";

//only responsible for dealing with reacieving input and storing it through onAdd
export default function TaskInput({ onAdd }) {
  //--------------------------states--------------------------

  const [input, setInput] = useState("");
  //--------------------------Functions--------------------------

  //handler functions since we are going to use on add and setinput in this order in two places
  const handleAdd = () => {
    const value = input.trim();
    if (!value) return;
    onAdd(input);
    setInput("");
  };
  //--------------------------parameters for other elements--------------------------
  const inputParameters = {
    type: "text",
    value: input,
    onChange: (e) => setInput(e.target.value),
    onKeyDown: (e) => e.key === "Enter" && handleAdd(),

    className: styles.input,
  };

  const testlog = () => {
    console.log(input);
  };
  //--------------------------Rendering--------------------------
  return (
    <div className={styles.row}>
      <input {...inputParameters} />
      <button onClick={testlog}>test</button>
      <button className={styles.button} onClick={handleAdd}>
        add
      </button>
    </div>
  );
}
