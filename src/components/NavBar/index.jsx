import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import "./style.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <a href="f">
          <FiFacebook className="face" />
        </a>
        <a href="i">
          <AiOutlineInstagram />
        </a>
      </div>
      <ul>
        <li>For Businesses</li>
        <li>Help</li>
        <li>
          {" "}
          <select>
            <option>EN</option>
            <option>ES</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
