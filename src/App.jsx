import { useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";

//import new hook
import { useTasks } from "./hooks/useTasks.js";

//The main entry point for the app, contains global states, the main array and functions related to editing the array.
//

function App() {
  //--------------------------states--------------------------

  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortMode, setSortMode] = useState("newFirst");
  const [query, setQuery] = useState("");

  //variables and functions from new hook "useTasks.js"
  const { list, handleAdd, handleDelete, toggleComplete, editTask } =
    useTasks();

  // --------------------------Objects for passing props--------------------------

  //Toolbar Props
  const toolbarProps = {
    setShowCompleted,
    showCompleted,
    query,
    setQuery,
    sortMode,
    setSortMode,
  };
  //TaskList Props
  const taskListProps = {
    sortMode,
    showCompleted,
    list,
    onDelete: handleDelete,
    onToggle: toggleComplete,
    onEdit: editTask,
    query,
  };

  //--------------------------parameters for other elements--------------------------
  const inputParameters = {
    type: "text",
    value: input,
    onChange: (e) => setInput(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        handleAdd(input); //added input parameter
      }
    },
  };
  //--------------------------Rendering--------------------------
  return (
    <>
      <input {...inputParameters} />
      {/*added input to function*/}
      <button onClick={() => handleAdd(input)}>add</button>
      <Toolbar {...toolbarProps} />
      <TaskList {...taskListProps} />
    </>
  );
}

export default App;
