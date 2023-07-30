import React, { useState } from "react";

export default function Time() {
  const [time, setTime] = useState(0);
  return (
    <div>
      <input
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
    </div>
  );
}
