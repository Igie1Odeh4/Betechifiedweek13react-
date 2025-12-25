

// // Import your image
// import image from "./assets/image.png";

// // Define the component
// function Propss(props) {
//   return (
//     <div className="propss">
//       <img src={image} alt="Profile Image" />
//       <h1>Name: {props.name}</h1>
//       <p>Age: {props.age}</p>
//       <p>Gender: {props.gender}</p>
//     </div>
//   );
// }

// // Export the component
// export default Propss;

import React from "react";
import "./propss.css";

function Propss({ name, age, gender, image }) {
  return (
    <div className="card">
      <img src={image} alt="Profile" className="card-image" />
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default Propss;
