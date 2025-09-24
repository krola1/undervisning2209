import styles from "../../styles/SortSelect.module.css";

// responsible for the sort dropdown and changing the sortMode state.
export default function SortSelect({ sortMode, setSortMode }) {
  //--------------------------Rendering--------------------------
  return (
    <select
      className={styles.selector}
      value={sortMode}
      onChange={(e) => setSortMode(e.target.value)}
    >
      <option value="newFirst">Newest First</option>
      <option value="oldFirst">Oldest First</option>
      <option value="az">A-Å</option>
      <option value="za">Å-A</option>
    </select>
  );
}
