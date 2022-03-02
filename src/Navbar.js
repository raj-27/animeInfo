import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5rem"
        }}
      >
        <Link to="/">home</Link>
        <Link to="cart">cart</Link>
      </div>
    </>
  );
};
export default Navbar;
