import classes from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Wyszukaj..." />
    </div>
  );
}

export default SearchBar;
