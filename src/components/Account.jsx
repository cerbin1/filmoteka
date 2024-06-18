import classes from "./Account.module.css";
function Account() {
  return (
    <div className={classes.container}>
      <h1>Konto</h1>
        <button>Załóż konto</button>
      {/* </div> */}
      {/* <div> */}
        <button>Zaloguj się</button>
      {/* </div> */}
    </div>
  );
}

export default Account;
