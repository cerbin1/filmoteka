import classes from "./Navbar.module.css";
import SearchBar from "./SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbarList}>
        <Link to="/movies">
          <li>Filmy</li>
        </Link>
        <Link to="/series">
          <li>Seriale</li>
        </Link>
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
