import classes from "./SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Wyszukaj..." />
      <FontAwesomeIcon
        className={classes.searchBarIcon}
        icon={faSearch}
        size="xl"
      ></FontAwesomeIcon>
    </div>
  );
}

export default SearchBar;
