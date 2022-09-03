import React from 'react';
import styles from '../../styles/Home.module.css'

let PrivateValue = "This is a value private to the module!";
console.log('PrivateValue', PrivateValue);

export const add = (x, y) =>{
  PrivateValue = x + y;
  console.log('PrivateValue', PrivateValue);
  return x + y;
}
export function multiply(x, y) {
  PrivateValue = x * y;
  console.log('PrivateValue', PrivateValue);
  return x * y;
}
export function subtract(x, y) {
  PrivateValue = x - y;
  console.log('PrivateValue', PrivateValue);
  return x - y;
}
export function square(x) {
  PrivateValue = x * x;
  console.log('PrivateValue', PrivateValue);
  return x * x;
}

const Es2015Modules = () => {
  return (
    <div>
      <h1>ES2015 Modules</h1>
        <div className={styles.card}>
            <b>add(1,2) = {add(1, 2)} </b>
            <br/>
            <b>subtract(1,2) = {subtract(1, 2)} </b>
            <br/>
            <b>multiply(1,2) = {multiply(1, 2)} </b>
            <br/>
            <b>square(2) = {square(2)} </b>
        </div>
    </div>
  );
}

export default Es2015Modules;
