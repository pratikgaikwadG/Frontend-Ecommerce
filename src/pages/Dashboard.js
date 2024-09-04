
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ListGroup, Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { FaUser, FaEnvelope, FaUserTag, FaTimes, FaBars } from "react-icons/fa";
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import Addcategory from "../components/category/Addcategory";
// import Addproduct from "../components/products/Addproduct";

// const Dashboard = () => {
//   const [user, setUser] = useState({});
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function getUserInfo() {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/users/userinfo",
//           {
//             headers: {
//               Authorization: "Bearer " + localStorage.getItem("token"),
//             },
//           }
//         );
//         setUser(response.data.user);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getUserInfo();
//   }, []);

//   const renderSidebarItems = () => {
//     return (
//       <>
//         <div className="container mb-4">
//           <FaUserTag className="me-3" /> {user.role}
//         </div>
//         <div className="container mb-4">
//           <FaEnvelope className="me-3" /> {user.email}
//         </div>
//         <div className="container mb-4">
//           <FaUser className="me-3" /> {user.username}
//         </div>
//         <hr />
//         <div className="container">
//           <ul>
//             <Link to={"Products"}>
//               <Button variant="outline-success">Products</Button>
//             </Link>
//             <hr></hr>
//             {user.role === "admin" && (
//               <>
//                 <Link to={"addproduts"}>
//                   <Button variant="outline-success">Add Products</Button>
//                 </Link>
//                 <hr></hr>
//                 <Link to={"addcategory"}>
//                   <Button variant="outline-success">Add Category</Button>
//                 </Link>
//                 <hr></hr>
//               </>
//             )}
//             <Link to={"Category"}>
//               <Button variant="outline-success">Category</Button>
//             </Link>
//             <hr></hr>
//             <Link to={"cart"}>
//               <Button variant="outline-success">Cart</Button>
//             </Link>
//           </ul>
//         </div>
//       </>
//     );
//   };

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <Container fluid className="d-flex p-0">
//       <Row className="flex-nowrap w-100">
//         <Col
//           xs={sidebarOpen ? 8 : 2}
//           sm={sidebarOpen ? 4 : 2}
//           md={sidebarOpen ? 3 : 1}
//           className={`bg-light p-3 ${
//             sidebarOpen ? "sidebar-open" : "sidebar-closed"
//           }`}
//           style={{
//             minHeight: "100vh",
//             transition: "width 0.3s",
//             overflowX: "hidden",
//             position: "relative",
//           }}
//         >
//           {sidebarOpen && (
//             <button
//               onClick={handleSidebarToggle}
//               className="btn btn-light position-absolute top-0 end-0 mt-3 me-3"
//               style={{ zIndex: 1 }}
//             >
//               <FaTimes />
//             </button>
//           )}
//           {!sidebarOpen && (
//             <button
//               onClick={handleSidebarToggle}
//               className="btn btn-light position-absolute top-0 start-0 mt-3 ms-3"
//               style={{ zIndex: 1 }}
//             >
//               <FaBars />
//             </button>
//           )}
//           {sidebarOpen && (
//             <ListGroup variant="flush">{renderSidebarItems()}</ListGroup>
//           )}
//         </Col>
//         <Col
//           className="flex-grow-1"
//           style={{
//             marginLeft: sidebarOpen ? "250px" : "15px",
//             transition: "margin-left 0.3s",
//           }}
//         >
//           <Routes>
//             <Route path="Products" element={<h1>Products</h1>} />
//             <Route path="Category" element={<h1>Category</h1>} />
//             <Route path="cart" element={<h1>Cart</h1>} />
//             <Route path="addproduts" element={<Addproduct />} />
//             <Route path="addcategory" element={<Addcategory />} />
//             <Route
//               path="/"
//               element={
//                 <h1 style={{ marginRight: "500px" }}>Welcome to Dashboard</h1>
//               }
//             />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaUserTag, FaTimes, FaBars, FaSignOutAlt, FaShoppingCart, FaBox, FaTags } from "react-icons/fa";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Addcategory from "../components/category/Addcategory";
import Addproduct from "../components/products/Addproduct";
import "../styles/Dashboard.css"; 

import Cart from "../components/Cart/Cart";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/users/userinfo",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo();
  }, []);

  const renderSidebarItems = () => {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item className="dashboard-user-info">
          <FaUserTag className="me-2" /> {user.role}
        </ListGroup.Item>
        <ListGroup.Item className="dashboard-user-info">
          <FaEnvelope className="me-2" /> {user.email}
        </ListGroup.Item>
        <ListGroup.Item className="dashboard-user-info mb-4">
          <FaUser className="me-2" /> {user.username}
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="Products" action className="dashboard-link">
          <FaBox className="me-2" /> Products
        </ListGroup.Item>
        {user.role === "admin" && (
          <>
            <ListGroup.Item as={Link} to="addproduts" action className="dashboard-link">
              <FaBox className="me-2" /> Add Products
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="addcategory" action className="dashboard-link">
              <FaTags className="me-2" /> Add Category
            </ListGroup.Item>
          </>
        )}
        <ListGroup.Item as={Link} to="Category" action className="dashboard-link">
          <FaTags className="me-2" /> Category
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="cart" action className="dashboard-link">
          <FaShoppingCart className="me-2" /> Cart
        </ListGroup.Item>
        <ListGroup.Item action onClick={logout} className="dashboard-link mt-4">
          <FaSignOutAlt className="me-2" /> Logout
        </ListGroup.Item>
      </ListGroup>
    );
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Container fluid className="p-0">
      <Row className="flex-nowrap w-100">
        <Col
          xs={sidebarOpen ? 8 : 2}
          sm={sidebarOpen ? 4 : 2}
          md={sidebarOpen ? 3 : 1}
          className={`dashboard-sidebar bg-light p-3 ${
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
          style={{
            minHeight: "100vh",
            transition: "all 0.3s",
            position: "relative",
          }}
        >
          <Button
            variant="light"
            className="sidebar-toggle-btn"
            onClick={handleSidebarToggle}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </Button>
          {sidebarOpen && renderSidebarItems()}
        </Col>
        <Col className="dashboard-content">
          <Routes>
            <Route path="Products" element={<Cart/>} />
            <Route path="Category" element={<h1>Category</h1>} />
            <Route path="cart" element={<h1>Cart</h1>} />
            <Route path="addproduts" element={<Addproduct />} />
            <Route path="addcategory" element={<Addcategory />} />
            <Route
              path="/"
              element={
                <h1 className="dashboard-welcome">Welcome to Dashboard</h1>
              }
            />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
