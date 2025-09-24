import SortSelect from "./SortSelect.jsx";
import SearchInput from "./SearchInput.jsx";

export default function Toolbar({
  setShowCompleted,
  query,
  setQuery,
  sortMode,
  setSortMode,
  showCompleted,
}) {
  return (
    <>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide completed" : "Show Completed"}
      </button>
      <SortSelect sortMode={sortMode} setSortMode={setSortMode} />
      <SearchInput query={query} setQuery={setQuery} />
    </>
  );
}
