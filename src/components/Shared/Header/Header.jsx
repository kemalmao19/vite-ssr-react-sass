import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
