import Calendar from "../Calendar";
import Time from "../Time";
import Location from "../Location";
import "./style.css";
import Button from "../MainButton";
const SearchCategory = () => {
  return (
    <>
      <form className="form" action="../../Pages/Search">
        <div className="category">
          <div className="session1">
            <div className="checkBoxes">
              <div className="checkBox">
                <input name="atHome" id="at home" type="checkBox"></input>
                <label htmlFor="atHome">At home</label>
              </div>
              <div className="checkBox">
                <input name="AtBusiness" type="checkBox"></input>
                <label htmlFor="AtBusiness">At Business</label>
              </div>
            </div>
            <div className="line"></div>
            <div className="date-time">
              <div className="date">
                <Calendar />
              </div>

              <div className="line"></div>

              <div className="time">
                <Time />
              </div>
              <div className="line"></div>
              <div>
                <Location />
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            text={"Search"}
            width="70px"
            height="35px"
            border="orange 1px solid"
            borderRadius=".3rem"
            marginLeft="20px"
            color="orange"
          />
        </div>
      </form>
    </>

    // <div className="search">
    //   <div className="check_box">
    //     <input id="at home" type="checkBox"></input>
    //     <label>At home</label>

    //     <input type="checkBox"></input>
    //     <label>Business</label>
    //   </div>
    //   <div className="date">
    //     <Calendar />
    //   </div>
    //   <div className="time">
    //     <input
    //       value={time}
    //       type="time"
    //       onChange={(e) => setTime(e.target.value)}
    //     />
    //   </div>
    //   <div className="btn">
    //     <Button
    //       onClick={() => {}}
    //       text="Search"
    //       width="80px"
    //       height="35px"
    //       border="none"
    //       borderRadius=".3rem"
    //       color="rgb(232, 158, 84)"
    //     />
    //   </div>
    // </div>
  );
};
export default SearchCategory;
