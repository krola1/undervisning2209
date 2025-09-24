import TaskCard from "./TaskCard.jsx";
import { makeSorter } from "../utils/sorters.js";

//  Responsible for rendering tasks to list, and aplying sort/filters
export default function TaskList({
  showCompleted,
  list,
  onDelete,
  onToggle,
  onEdit,
  query,
  sortMode,
}) {
  //--------------------------prop groups--------------------------
  const actions = { onDelete, onToggle, onEdit };
  const state = { showCompleted, list, query, sortMode };

  //--------------------------Rendering--------------------------
  //  If list is empty, renders a message that list is empty, if not renders itsems based on sort,
  // and a counter to show ifs something is hidden by completed toggle
  return state.list.length ? (
    <div>
      <div>
        <strong>Total tasks: {state.list.length}</strong>
      </div>
      <ul>
        {state.list
          .filter((task) => state.showCompleted || !task.completed)
          .filter((task) =>
            task.text.toLowerCase().includes(state.query.trim().toLowerCase())
          )
          .sort(makeSorter(state.sortMode))
          .map((item) => (
            <TaskCard key={item.id} {...actions} {...item} />
          ))}
      </ul>
    </div>
  ) : (
    <h3>List is empty</h3>
  );
}
