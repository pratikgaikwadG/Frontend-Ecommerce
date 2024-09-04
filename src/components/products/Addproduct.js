
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// function AddProduct() {
//   const [productname, setProductname] = useState("");
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [available, setAvailable] = useState("true");
//   const [quantity, setQuantity] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("No token found.");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/category/getcategory",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         console.log("res data", response.data);
//         if (response.data && response.data.category) {
//           setCategories(response.data.category);
//         } else {
//           setError("No categories found.");
//         }
//       } catch (err) {
//         console.error(
//           "Error fetching categories:",
//           err.response ? err.response.data : err.message
//         );
//         setError(
//           "Error fetching categories. Please check the console for more details."
//         );
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("User is not authenticated.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("productname", productname);
//     formData.append("image", image);
//     formData.append("category", category);
//     formData.append("price", price);
//     formData.append("available", available);
//     formData.append("quantity", quantity);
//     formData.append("description", description);

//     try {
//       await axios.post("http://localhost:5001/api/addproduct", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setSuccess("Product added successfully!");
//       setProductname("");
//       setImage(null);
//       setDescription("");
//       setCategory("");
//       setPrice("");
//       setAvailable("true");
//       setQuantity("");
//       setError("");
//     } catch (err) {
//       console.error(
//         "Error adding product:",
//         err.response ? err.response.data : err.message
//       );
//       setError("Error adding product. Please try again.");
//     }
//   };

//   return (
//     <Container>
//       <h2>Add Product</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="productName">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={productname}
//             onChange={(e) => setProductname(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="productImage">
//           <Form.Label>Product Image</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </Form.Group>
//         <Form.Group controlId="productDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="productCategory">
//           <Form.Label>Category</Form.Label>
//           <Form.Control
//             as="select"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="">Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>
//                 {cat.categoryname}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="productPrice">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="productAvailable">
//           <Form.Label>Available</Form.Label>
//           <Form.Control
//             as="select"
//             value={available}
//             onChange={(e) => setAvailable(e.target.value)}
//             required
//           >
//             <option value="true">Yes</option>
//             <option value="false">No</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="productQuantity">
//           <Form.Label>Quantity</Form.Label>
//           <Form.Control
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </Form.Group>

//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">{success}</Alert>}

//         <Button variant="primary" type="submit" className="mt-3">
//           Add Product
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default AddProduct;
























// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";

// const AddProduct = ({ user }) => {
//   const [productname, setProductname] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [available, setAvailable] = useState(true);
//   const [quantity, setQuantity] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("No token found.");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/category/getcategory",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setCategories(response.data);
//       } catch (err) {
//         console.error(
//           "Error fetching categories:",
//           err.response ? err.response.data : err.message
//         );
//         setError("Error fetching categories. Please check the console for more details.");
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("User is not authenticated.");
//       return;
//     }

//     const productData = {
//       productname,
//       image,
//       category,
//       price,
//       available,
//       quantity,
//       createdBy: user?._id,  // Ensure the user object contains the ID
//     };

//     try {
//       await axios.post("http://localhost:5001/api/addproduct", productData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setSuccess("Product added successfully!");
//       setProductname("");
//       setImage("");
//       setCategory("");
//       setPrice("");
//       setAvailable(true);
//       setQuantity("");
//       setError("");
//     } catch (err) {
//       console.error("Error adding product:", err.response ? err.response.data : err.message);
//       setError("Error adding product. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-4 bg-gray-100 p-6 rounded-md shadow-md">
//       <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="productname">Product Name</label>
//           <input
//             type="text"
//             name="productname"
//             value={productname}
//             onChange={(e) => setProductname(e.target.value)}
//             className="w-full px-3 py-2 bg-slate-50 text-gray-700 border rounded-lg focus:outline-none focus:ring"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
//           <select
//             name="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2 bg-slate-50 text-black border rounded-lg focus:outline-none focus:ring"
//             required
//           >
//             <option value="" className="text-black">Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>{cat.CategoryName}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="w-full px-3 py-2 bg-slate-50 text-gray-700 border rounded-lg focus:outline-none focus:ring"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full px-3 py-2 bg-slate-50 text-gray-700 border rounded-lg focus:outline-none focus:ring"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="image">Product Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full px-3 py-2 bg-slate-50 text-gray-700 border rounded-lg focus:outline-none focus:ring"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="available">Available</label>
//           <select
//             name="available"
//             value={available}
//             onChange={(e) => setAvailable(e.target.value === "true")}
//             className="w-full px-3 py-2 bg-slate-50 text-black border rounded-lg focus:outline-none focus:ring"
//             required
//           >
//             <option value="true">Yes</option>
//             <option value="false">No</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring"
//         >
//           Add Product
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && <p className="text-green-500 mt-4">{success}</p>}
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddProduct;









import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = ({ user }) => {
  const [productname, setProductname] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found.");
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:5001/api/category/getcategory",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("res data", response.data);

        if (response.data && Array.isArray(response.data.category)) {
          setCategories(response.data.category);
        } else {
          setError("No categories found.");
        }
      } catch (err) {
        console.error(
          "Error fetching categories:",
          err.response ? err.response.data : err.message
        );
        setError(
          "Error fetching categories. Please check the console for more details."
        );
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User is not authenticated.");
      return;
    }

    const productData = {
      productname,
      image,
      category,
      price,
      available,
      quantity,
      createdBy: user?._id,
    };

    try {
      await axios.post("http://localhost:5001/api/addproduct", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSuccess("Product added successfully!");
      setProductname("");
      setImage("");
      setCategory("");
      setPrice("");
      setAvailable(true);
      setQuantity("");
      setError("");
    } catch (err) {
      console.error(
        "Error adding product:",
        err.response ? err.response.data : err.message
      );
      setError("Error adding product. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="productname">Product Name</label>
            <input
              type="text"
              name="productname"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" className="text-gray-700">Select a category</option>
              {Array.isArray(categories) && categories.map((cat) => (
                <option key={cat._id} value={cat._id}>{cat.categoryname}</option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="image">Product Image URL</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="available">Available</label>
            <select
              name="available"
              value={available}
              onChange={(e) => setAvailable(e.target.value === "true")}
              className="w-full px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-red font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring"
          >
            Add Product
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProduct;
