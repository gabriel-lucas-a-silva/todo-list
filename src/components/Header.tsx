import styles from "./Header.module.css";

import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.igniteLogo} src={rocketLogo} alt="Ícone Todo" />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
