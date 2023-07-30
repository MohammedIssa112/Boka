import { useState } from "react";
import "./style.css";

export default function Select({ data, handeTitle }) {
  const [title, setTitle] = useState(" ");
  const options = data;

  return (
    <div className="select">
      <input value={title} type="text" />
      <div className="options">
        {options.map((item) => (
          <div onClick={() => setTitle(item.title)} className={"option"}>
            <div className="option-img">
              <img width={"30px"} height={"30px"} src={item.img} />
            </div>
            <div className="div-title">
              <span className="option-title">{item.title}</span>
              <p className="option-disc">{item.discription}</p>
            </div>
            <div className="option-price">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
