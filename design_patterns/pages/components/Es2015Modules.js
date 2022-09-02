import React from 'react';
import styles from '../../styles/Home.module.css'

let PrivateValue = "This is a value private to the module!";

export const add = (x, y) =>{
  PrivateValue = x + y;
  return x + y;
}
export function multiply(x, y) {
  PrivateValue = x * y;
  console.log('PrivateValue', PrivateValue);
  return x * y;
}
export function subtract(x, y) {
  PrivateValue = x - y;
  return x - y;
}
export function square(x) {
  PrivateValue = x * x;
  return x * x;
}

const Es2015Modules = () => {
  return (
    <div>
      <h1>ES2015 Modules</h1>
        <div className={styles.card}>
            <b>add(1,2)</b> = {add(1, 2)}
            <br/>
            <b>subtract(1,2)</b> = {subtract(1, 2)}
            <br/>
            <b>multiply(1,2)</b> = {multiply(1, 2)}
            <br/>
            <b>square(2)</b> = {square(2)}
        </div>
    </div>
  );
}

export default Es2015Modules;
