//Responsible for dealing with everything regarding the list.
//
import { useLocalStorage } from "./useLocalStorage.js";

// hook for dealing with listmanipulation
export function useTasks() {
  const [list, setList] = useLocalStorage("list", []);

  //--------------------------List editing functions --------------------------
  // adds task object to list ---!!! to make it ready for general use, ive removed the setText, added text parameter and replaced input with "text"
  const handleAdd = (text) => {
    if (text.trim() !== "") {
      const newItem = {
        id: crypto.randomUUID(),
        created: Date.now(),
        text: text,
        completed: false,
      };
      setList([...list, newItem]);
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

  //returning variables and functions
  return { list, handleAdd, handleDelete, toggleComplete, editTask };
}
