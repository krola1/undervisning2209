import { useState } from "react";

import "./App.css";
import TaskList from "./components/TaskList.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";

//import new hook
import { useTasks } from "./hooks/useTasks.js";
import TaskInput from "./components/TaskInput.jsx";

//The main entry point for the app, contains global states, the main array and functions related to editing the array.
//

function App() {
  //--------------------------states--------------------------
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

  //--------------------------Rendering--------------------------
  return (
    <div style={{ minHeight: "100dvh", background: "#fff0f6", padding: 24 }}>
      <TaskInput onAdd={handleAdd} />
      <Toolbar {...toolbarProps} />
      <TaskList {...taskListProps} />
    </div>
  );
}

export default App;
