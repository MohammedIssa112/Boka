import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Select from "../../components/Select";
import Button from "../MainButton";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./style.css";
import { data } from "./data";
import { useState } from "react";
function habdleTitle(id) {
  const arr = data.map((item) => {
    if (item.id === id) {
      return item.title;
    }
    return item.title;
  });
}
export default function MainCategory() {
  const [selectState, setSelectState] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="box">
      <div className="photos">
        <Slider {...settings}>
          {/* {data.map((item) => (
            <img src={item.img} className="img" />
          ))} */}
          <img
            className="img"
            src="https://dev.boka.co/_next/image/?url=https%3A%2F%2Fdev-boka-files.s3.amazonaws.com%2FBM%2FBusiness%2FMassage%2Fportolio%2Fcloseup-therapists-placing-hot-stones-man-s-back-during-lastone-therapy-spa.jpg&w=256&q=75"
          />
          <img
            className="img"
            src="https://dev.boka.co/_next/image/?url=https%3A%2F%2Fdev-boka-files.s3.amazonaws.com%2FBM%2FBusiness%2FMassage%2Fportolio%2Fdoctor-massages-man-hospital.jpg&w=256&q=75"
          />
          <img
            className="img"
            src="https://dev.boka.co/_next/image/?url=https%3A%2F%2Fdev-boka-files.s3.amazonaws.com%2FBM%2FBusiness%2FMassage%2Fportolio%2Fmasseur-makes-massage%2B(1).jpg&w=256&q=75"
          />
        </Slider>
      </div>
      <div className="content">
        <h3 className="title">Hair x Presion Un Salons</h3>
        <div className="rate">
          <AiTwotoneStar style={{ color: "orange" }} />
          <AiTwotoneStar style={{ color: "orange" }} />
          <AiTwotoneStar style={{ color: "orange" }} />
          <AiOutlineStar style={{ color: "orange" }} />
          <AiOutlineStar style={{ color: "orange" }} />
          <span className="review"> 3Reviews</span>
        </div>
        <div>
          <Button
            text="Business"
            width="250px"
            height="30px"
            border="1px solid orange"
            borderRadius=".5rem"
            color={"white"}
            textColor="orange"
          />
        </div>

        <div className="select">
          <input type="text" />
          {selectState ? (
            <button
              style={{ width: "20px", height: "20px" }}
              onClick={() => {
                setSelectState(false);
              }}
            >
              {<MdKeyboardArrowUp />}
            </button>
          ) : (
            <button
              style={{ width: "20px", height: "20px" }}
              onClick={() => {
                setSelectState(true);
              }}
            >
              {<MdKeyboardArrowDown />}
            </button>
          )}

          {selectState ? <Select data={data} /> : ""}
        </div>
      </div>
    </div>
  );
}
