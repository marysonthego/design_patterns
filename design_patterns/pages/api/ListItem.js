import React, { useContext } from "react";
import styles from '../../styles/Home.module.css'
import { ThemeContext } from "../ProviderPattern";

export default function ListItem() {
  const theme = useContext(ThemeContext);

  return (
    <li className={styles.card} style={theme.theme}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </li>
  );
}
