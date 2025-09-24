import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import "./App.css";

import TaskList from "./components/TaskList.jsx";
import Toolbar from "./components/Toolbar/Toolbar.jsx";

function App() {
  const [list, setList] = useLocalStorage("list", []);
  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortMode, setSortMode] = useState("newFirst");
  const [query, setQuery] = useState("");

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

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />

      <button onClick={handleAdd}>add</button>

      <Toolbar
        setShowCompleted={setShowCompleted}
        showCompleted={showCompleted}
        query={query}
        setQuery={setQuery}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
      <TaskList
        sortMode={sortMode}
        showCompleted={showCompleted}
        list={list}
        onDelete={handleDelete}
        onToggle={toggleComplete}
        onEdit={editTask}
        query={query}
      />
    </>
  );
}

export default App;
