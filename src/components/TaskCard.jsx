import { useState } from "react";

//Resposnible for rendering out information based on the task object, also assists the edit function with local states an d functions
// moved all functions in to actions object for a cleaner look
export default function TaskCard({ id, created, completed, text, ...actions }) {
  //--------------------------states--------------------------
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  //--------------------------editing functions --------------------------
  //toggles isEditing state
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  //Calls onEdit with local values and calls toggleEdit to change state
  const saveEdit = () => {
    if (newText.trim() !== "") {
      actions.onEdit(id, newText);
      toggleEdit();
    }
  };
  //--------------------------Rendering--------------------------
  return (
    <div style={{ border: "solid white" }}>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => actions.onToggle(id)}
      />
      <p>{new Date(created).toLocaleString()}</p>
      {/*Conditional rendering based on isEditing*/}
      {isEditing ? (
        <>
          <input
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
            type="text"
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <h3 onClick={() => toggleEdit()}>{text}</h3>
      )}
      <button onClick={() => actions.onDelete(id)}>Delete</button>
    </div>
  );
}
