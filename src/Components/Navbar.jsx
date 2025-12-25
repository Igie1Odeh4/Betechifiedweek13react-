import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (

    <nav className="Navbar">

      <Link to="/">Home</Link> |{" "}
      <Link to="/card">Card</Link> |{" "}
      <Link to="/Product">Product</Link>
    </nav>
  );
}

export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   const navStyle = {

//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       background: "#111",
//       padding: "15px 30px",
//       display: "flex",
//       gap: "30px",
//       zIndex: 1000,
//       boxSizing: "border-box"


//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontWeight: 600,
//   };

//   return (
//     <nav style={navStyle}>
//       <Link style={linkStyle} to="/">Home</Link>
//       <Link style={linkStyle} to="/card">Card</Link>
//       <Link style={linkStyle} to="/project">Project</Link>
//     </nav>
//   );
// }

// export default Navbar;
