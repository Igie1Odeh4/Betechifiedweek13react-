
// // import Propss from "./propss.jsx";
// // import "./index.css";


// // function App(props) {
// //   return (
// //     <>
// //  <div className="app-container">

// //       <Propss name="John Doe" age={30} gender="Male" />
// //       <Propss name="John Doe" age={30} gender="Male" />
// //       <Propss name="John Doe" age={30} gender="Male" />
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from "react";
// import Propss from "./propss.jsx";
// import "./propss.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch users when component mounts
//   useEffect(() => {
//     // Simulated fetch: you can replace with real API
//     const fetchUsers = async () => {
//       const data = [
//         { id: 1, name: "John Doe", age: 30, gender: "Male", image: "https://via.placeholder.com/100" },
//         { id: 2, name: "Jane Smith", age: 25, gender: "Female", image: "https://via.placeholder.com/100" },
//         { id: 3, name: "Bob Brown", age: 40, gender: "Male", image: "https://via.placeholder.com/100" },
//       ];
//       // Simulate network delay
//       await new Promise((res) => setTimeout(res, 1000));
//       setUsers(data);
//       setLoading(false);
//     };

//     fetchUsers();
//   }, []); // empty dependency = runs once

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

//   return (
//     <div className="app-container">
//       {users.map((user) => (
//         <Propss
//           key={user.id}
//           name={user.name}
//           age={user.age}
//           gender={user.gender}
//           image={user.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import Product from "./Pages/Product";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
