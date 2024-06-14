import classes from "./Navbar.module.css";
import SearchBar from "./SearchBar.jsx";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li>Filmy</li>
        <li>Seriale</li>
        <li>Ranking</li>
      </ul>
      <SearchBar />
      <div className={classes.account}>Konto</div>
    </div>
  );
}
export default Navbar;
