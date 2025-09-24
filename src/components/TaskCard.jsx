import { useState } from "react";

export default function TaskCard({
  id,
  created,
  completed,
  text,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    if (newText.trim() !== "") {
      onEdit(id, newText);
      toggleEdit();
    }
  };

  return (
    <div style={{ border: "solid white" }}>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => onToggle(id)}
      />
      <p>{new Date(created).toLocaleString()}</p>
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
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
