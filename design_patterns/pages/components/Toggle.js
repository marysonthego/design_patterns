import React, { useContext } from "react";
import { ThemeContext } from "../ProviderPattern";
import styles from "../../styles/ProviderPattern.module.css";


export default function Toggle() {
  const theme = useContext(ThemeContext);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className={styles.slider} />
    </label>
  );
}
