import { useState } from "react";

//only responsible for dealing with reacieving input and storing it through onAdd
export default function TaskInput({ onAdd }) {
  //--------------------------states--------------------------

  const [input, setInput] = useState("");
  //--------------------------parameters for other elements--------------------------
  const inputParameters = {
    type: "text",
    value: input,
    onChange: (e) => setInput(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        handleAdd(input); //added input parameter
        setInput("");
      }
    },
  };
  //--------------------------Rendering--------------------------
  return (
    <>
      <input {...inputParameters} />
      <button onClick={() => onAdd(input)}>add</button>
    </>
  );
}
