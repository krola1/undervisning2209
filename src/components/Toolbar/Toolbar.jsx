import SortSelect from "./SortSelect.jsx";
import SearchInput from "./SearchInput.jsx";

//responsible for holding the sort/filter components and passing the correct states and setters to components
export default function Toolbar({
  setShowCompleted,
  query,
  setQuery,
  sortMode,
  setSortMode,
  showCompleted,
}) {
  //--------------------------Rendering--------------------------
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
