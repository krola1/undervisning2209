import SortSelect from "./SortSelect.jsx";
import CompletedSelect from "./CompletedSelect.jsx";
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
      <CompletedSelect
        showCompleted={state.showCompleted}
        setShowCompleted={actions.setShowCompleted}
      />
      <SortSelect {...state} {...actions} />
      <SearchInput {...state} {...actions} />
    </div>
  );
}
