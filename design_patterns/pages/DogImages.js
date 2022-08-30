import React from "react";

import styles from '../styles/Home.module.css'
import useDogImages from "./api/useDogImages";

export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" className={styles.card}/>);
}
