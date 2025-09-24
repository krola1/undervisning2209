import TaskCard from "./TaskCard.jsx";
import { makeSorter } from "../utils/sorters.js";

export default function TaskList({
  showCompleted,
  list,
  onDelete,
  onToggle,
  onEdit,
  query,
  sortMode,
}) {
  return (
    <ul>
      {list
        .filter((task) => showCompleted || !task.completed)
        .filter((task) =>
          task.text.toLowerCase().includes(query.trim().toLowerCase())
        )
        .sort(makeSorter(sortMode))
        .map((item) => (
          <TaskCard
            key={item.id}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
            {...item}
          />
        ))}
    </ul>
  );
}
