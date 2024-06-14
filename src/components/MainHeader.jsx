import Logo from "./Logo.jsx";
import Navbar from "./Navbar.jsx";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Logo />
      <Navbar />
    </header>
  );
}
export default MainHeader;
