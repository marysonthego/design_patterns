import React from "react";
import ListItem from "./ListItem";
import { ThemeContext } from "../ProviderPattern";

export default function Boxes() {
  return (
    <ul className="list">
      {new Array(10).fill(0).map((x, i) => (
        <ListItem key={i} />
      ))}
    </ul>
  );
}
