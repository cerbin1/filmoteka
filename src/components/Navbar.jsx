import classes from "./Navbar.module.css";
import SearchBar from "./SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li>Filmy</li>
        <li>Seriale</li>
        <li>Ranking</li>
      </ul>
      <SearchBar />

      <div className={classes.account}>
        <FontAwesomeIcon icon={faUser} />
        <span className={classes.accountButtonText}>Konto</span>
      </div>
    </div>
  );
}
export default Navbar;
