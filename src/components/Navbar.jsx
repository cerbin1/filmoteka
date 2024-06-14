import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <ul className={classes.navbarList}>
        <li>Filmy</li>
        <li>Seriale</li>
        <li>Ranking</li>
      </ul>
      <input type="text" placeholder="Wyszukaj..." />
      <button>Konto</button>
    </div>
  );
}
export default Navbar;
