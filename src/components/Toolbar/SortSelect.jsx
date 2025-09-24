import { makeSorter } from "../../utils/sorters";
export default function SortSelect({ sortMode, setSortMode }) {
  return (
    <select
      value={sortMode}
      name=""
      id=""
      onChange={(e) => setSortMode(e.target.value)}
    >
      <option value="newFirst">Newest First</option>
      <option value="oldFirst">Oldest First</option>
      <option value="az">A-Å</option>
      <option value="za">Å-A</option>
    </select>
  );
}
