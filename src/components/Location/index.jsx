import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
export default function Location() {
  return (
    <div style={{ display: "inline-block" }}>
      <MdOutlineLocationOn />
      <input type="text" placeholder="Gaza,Ps" />
    </div>
  );
}
