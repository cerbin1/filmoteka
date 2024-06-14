import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.textLogo}>
      <Link to="/">KINOMANIAK</Link>
    </div>
  );
}
export default Logo;
