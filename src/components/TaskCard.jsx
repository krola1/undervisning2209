import { useState } from "react";
import styles from "../styles/TaskCard.module.css";

//Resposnible for rendering out information based on the task object, also assists the edit function with local states an d functions
// moved all functions in to actions object for a cleaner loo
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
    <div className={`${styles.card} ${completed ? styles.completed : ""}`}>
      <p className={styles.date}>{new Date(created).toLocaleString()}</p>
      {/*Conditional rendering based on isEditing*/}
      {isEditing ? (
        <input
          className={styles.textInput}
          onChange={(e) => setNewText(e.target.value)}
          value={newText}
          type="text"
        />
      ) : (
        <h3
          className={`${styles.taskText} ${completed ? styles.doneText : ""}`}
        >
          {text}
        </h3>
      )}

      <div className={styles.actions}>
        <label className={styles.completedToggle}>
          <input
            className={styles.checkbox}
            checked={completed}
            type="checkbox"
            onChange={() => actions.onToggle(id)}
            aria-label="Completed"
          />
          <span className={styles.completedLabel}>completed</span>
        </label>

        <button className={styles.button} onClick={() => actions.onDelete(id)}>
          Delete
        </button>
        <button
          className={styles.button}
          onClick={isEditing ? saveEdit : toggleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}
