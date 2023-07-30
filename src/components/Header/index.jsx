import Logo from "../Logo";
import Button from "../MainButton";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <div style={{ marginTop: "20px", marginRight: "20px" }}>
        <Button
          onClick={() => {}}
          text="Sign up"
          width="80px"
          height="35px"
          border="none"
          borderRadius=".3rem"
          color="rgb(232, 158, 84)"
        />

        <Button
          text="Login"
          width="70px"
          height="35px"
          border="orange 1px solid"
          borderRadius=".3rem"
          marginLeft="20px"
          color="inherit"
        />
      </div>
    </header>
  );
};
export default Header;
