// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, Alert, Container } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AddCategory = () => {
//   const [categoryname, setcategoryname] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("User is not authenticated");
//       toast.error("User is not authenticated");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:5001/api/category/addcategory",
//         { categoryname },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSuccess("Category added successfully!");
//       toast.success("Category added successfully!");
//       setcategoryname("");
//       setError(null);
//     } catch (err) {
//       setError("Error adding category. Please try again.");
//       toast.error("Error adding category. Please try again.");
//       setSuccess(null);
//     }
//   };

//   const handleDismiss = () => {
//     setError(null);
//     setSuccess(null);
//   };

//   return (
//     <Container>
//       <h2>Add Category</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="categoryname">
//           <Form.Label>Category Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={categoryname}
//             onChange={(e) => setcategoryname(e.target.value)}
//             required
//           />
//         </Form.Group>

//         {error && (
//           <Alert variant="danger" dismissible onClose={handleDismiss}>
//             {error}
//           </Alert>
//         )}

//         {success && (
//           <Alert variant="success" dismissible onClose={handleDismiss}>
//             {success}
//           </Alert>
//         )}

//         <Button type="submit" className="mt-3">
//           Add Category
//         </Button>
//       </Form>

//       <ToastContainer />
//     </Container>
//   );
// };

// export default AddCategory;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Addcategory = () => {
  const [categories, setCategories] = useState([]);
  const [categoryname, setcategoryname] = useState("");
  const [error, setError] = useState("");

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User is not authenticated");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/category/addcategory",
        {  categoryname }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        }
      );
        setCategories((prevCategories) => [
          ...prevCategories,
          response.data, 
        ]);
        setcategoryname('');
        toast.success('Category successfully added');
    } catch (err) {
      console.error("Error adding category:", err.response ? err.response.data : err.message);
      toast.error("Category not added. Try again.");
      setError("Category not added. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 h-auto bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Category</h2>
      {categories.length > 0 ? (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Existing Categories</h3>
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left text-gray-600">Category Name</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat,i) => (
                <tr key={i}>
                  <td className="px-4 py-2 border-b border-gray-200">{cat.categoryname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No categories available.</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="categoryname">
            Category Name
          </label>
          <input
            type="text"
            id="categoryname"
            name="categoryname"
            value={categoryname}
            onChange={(e) => setcategoryname(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 text-gray-700 border rounded-lg focus:outline-none focus:ring"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring"
        >
          Add Category
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Addcategory;