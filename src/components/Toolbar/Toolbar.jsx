import SortSelect from "./SortSelect.jsx";
import SearchInput from "./SearchInput.jsx";
import styles from "../../styles/Toolbar.module.css";

// Responsible for holding the sort/filter components and passing the correct states and setters to components
export default function Toolbar({
  setShowCompleted,
  query,
  setQuery,
  sortMode,
  setSortMode,
  showCompleted,
}) {
  //--------------------------prop groups--------------------------
  const actions = { setShowCompleted, setQuery, setSortMode };
  const state = { query, sortMode, showCompleted };

  //--------------------------Rendering--------------------------
  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button}
        onClick={() => actions.setShowCompleted(!state.showCompleted)}
      >
        {state.showCompleted ? "Hide completed" : "Show Completed"}
      </button>
      <SortSelect {...state} {...actions} />
      <SearchInput {...state} {...actions} />
    </div>
  );
}
