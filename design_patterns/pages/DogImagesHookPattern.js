import React from "react";
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import useDogImages from "./api/UseDogImages";

export default function DogImagesHookPattern() {
  const dogs = useDogImages();

  return (
    dogs.map((dog, i) =>
    <Image src={dog} key={i} alt="Dog" width={250} height={250} className={styles.card}/>
    ));
}
