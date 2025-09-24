import styles from "../../styles/SearchInput.module.css";

//-------------------------- Handles the searchField --------------------------

export default function SearchInput({ query, setQuery }) {
  return (
    <input
      className={styles.field}
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Query tasks..."
    />
  );
}
