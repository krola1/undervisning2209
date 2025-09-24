import styles from "../../styles/SortSelect.module.css";

//resposnible for dropdown menu that shows/hides completed tasks

export default function CompletedSelect({ showCompleted, setShowCompleted }) {
  return (
    <select
      className={styles.selector}
      value={showCompleted ? "show" : "hide"}
      onChange={(e) => setShowCompleted(e.target.value === "show")}
    >
      <option value="show">Show All</option>
      <option value="hide">Hide Completed</option>
    </select>
  );
}
