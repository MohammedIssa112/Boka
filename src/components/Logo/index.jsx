import logo from "../../assets/logo.jpg";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "22px",
        justifySelf: "center",
      }}
    >
      <img
        alt="logo"
        src={logo}
        style={{
          width: "25px",
          height: "25px",
          borderRadius: ".2rem",
          marginTop: "20px",
        }}
      />
      <h2>Boka</h2>
    </div>
  );
};
export default Logo;
