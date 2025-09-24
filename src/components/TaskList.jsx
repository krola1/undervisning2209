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
  // --------------------------Objects for passing props--------------------------
  //TaskCard props
  const taskCardActions = {
    onDelete,
    onToggle,
    onEdit,
  };

  //--------------------------Rendering--------------------------
  //  If list is empty, renders a message that list is empty, if not renders itsems based on sort,
  // and a counter to show ifs something is hidden by completed toggle
  return list.length ? (
    <div>
      <div>
        <strong>Total tasks: {list.length}</strong>
      </div>
      <ul>
        {list
          .filter((task) => showCompleted || !task.completed)
          .filter((task) =>
            task.text.toLowerCase().includes(query.trim().toLowerCase())
          )
          .sort(makeSorter(sortMode))
          .map((item) => (
            <TaskCard key={item.id} {...taskCardActions} {...item} />
          ))}
      </ul>
    </div>
  ) : (
    <h3>List is empty</h3>
  );
}
