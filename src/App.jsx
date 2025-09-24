import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import "./App.css";
import TaskList from "./components/TaskList.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";

//The main entry poinyt for out app, contains global states, the main array and functions related to editing the array.
//

function App() {
  //--------------------------states--------------------------
  const [list, setList] = useLocalStorage("list", []);
  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortMode, setSortMode] = useState("newFirst");
  const [query, setQuery] = useState("");

  //--------------------------List editing functions --------------------------
  // adds task object to list
  const handleAdd = () => {
    if (input.trim() !== "") {
      const newItem = {
        id: crypto.randomUUID(),
        created: Date.now(),
        text: input,
        completed: false,
      };
      setList([...list, newItem]);
      setInput("");
    }
  };
  ///  function for handelin deleting of tasks
  const handleDelete = (id) => {
    setList(list.filter((task) => task.id !== id));
  };
  /// function for toggeling complete status
  const toggleComplete = (id) => {
    setList(
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // function for editing task's
  const editTask = (id, newText) => {
    setList(
      list.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

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
        handleAdd();
      }
    },
  };
  //--------------------------Rendering--------------------------
  return (
    <>
      <input {...inputParameters} />
      <button onClick={handleAdd}>add</button>
      <Toolbar {...toolbarProps} />
      <TaskList {...taskListProps} />
    </>
  );
}

export default App;
