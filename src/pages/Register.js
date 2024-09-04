// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [mobileNumber, setMobilenumber] = useState("");
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   const usernamechange = (e) => setUsername(e.target.value);
//   const emailchange = (e) => setEmail(e.target.value);
//   const passwordchange = (e) => setPassword(e.target.value);
//   const mobilenumberchange = (e) => setMobilenumber(e.target.value);
//   const rolechnage = (e) => setRole(e.target.value);

//   async function register(payload) {
//     console.log("*", payload);
//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/users/register",
//         payload
//       );
//       console.log("response.data", response.data);
//       toast.success(response.data.message || "Registration Successful");
//       navigate("/login");
//     } catch (error) {
//       toast.error(error.response?.data?.error || "Registration failed");
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = { name: username, email, password, mobileNumber, role }; // Changed username to name
//     console.log("*Payload*", payload);
//     register(payload);
//   };

//   return (
//     <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-xl-10">
//             <div className="card rounded-3 text-black">
//               <div className="row g-0">
//                 <div className="col-lg-6">
//                   <div className="card-body p-md-5 mx-md-4">

//                     <div className="text-center">
//                       <img 
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" 
//                         style={{ width: '185px' }} 
//                         alt="logo" 
//                       />
//                       <h4 className="mt-1 mb-5 pb-1">Join The Lotus Team</h4>
//                     </div>

//                     <form onSubmit={handleSubmit}>

//                       <p>Please register your account</p>

//                       <div data-mdb-input-init className="form-outline mb-4">
//                         <input 
//                           type="text" 
//                           id="role" 
//                           className="form-control"
//                           placeholder="Role (admin/user)" 
//                           list="roleOptions"
//                           required
//                           value={role}
//                           onChange={rolechnage}
//                         />
//                         <datalist id="roleOptions">
//                           <option value="admin" />
//                           <option value="user" />
//                         </datalist>
//                         <label className="form-label" htmlFor="role">Role</label>
//                       </div>

//                       <div data-mdb-input-init className="form-outline mb-4">
//                         <input 
//                           type="text" 
//                           id="name" 
//                           className="form-control"
//                           placeholder="Full Name" 
//                           required 
//                           value={username}
//                           onChange={usernamechange}
//                         />
//                         <label className="form-label" htmlFor="name">Name</label>
//                       </div>

//                       <div data-mdb-input-init className="form-outline mb-4">
//                         <input 
//                           type="text" 
//                           id="mobileNumber" 
//                           className="form-control"
//                           placeholder="Mobile Number" 
//                           required 
//                           value={mobileNumber}
//                           onChange={mobilenumberchange}
//                         />
//                         <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
//                       </div>

//                       <div data-mdb-input-init className="form-outline mb-4">
//                         <input 
//                           type="email" 
//                           id="email" 
//                           className="form-control"
//                           placeholder="Email Address" 
//                           required 
//                           value={email}
//                           onChange={emailchange}
//                         />
//                         <label className="form-label" htmlFor="email">Email</label>
//                       </div>

//                       <div data-mdb-input-init className="form-outline mb-4">
//                         <input 
//                           type="password" 
//                           id="password" 
//                           className="form-control"
//                           placeholder="Password" 
//                           required 
//                           value={password}
//                           onChange={passwordchange}
//                         />
//                         <label className="form-label" htmlFor="password">Password</label>
//                       </div>

//                       <div className="text-center pt-1 mb-5 pb-1">
//                         <button 
//                           data-mdb-button-init 
//                           data-mdb-ripple-init 
//                           className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" 
//                           type="submit"
//                         >
//                           Register
//                         </button>
//                       </div>

//                       <div className="d-flex align-items-center justify-content-center pb-4">
//                         <p className="mb-0 me-2">Already have an account?</p>
//                         <button 
//                           type="button" 
//                           data-mdb-button-init 
//                           data-mdb-ripple-init 
//                           className="btn btn-outline-danger"
//                           onClick={() => navigate('/login')}
//                         >
//                           Log in
//                         </button>
//                       </div>

//                     </form>

//                   </div>
//                 </div>
//                 <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                   <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                     <h4 className="mb-4">We are more than just a company</h4>
//                     <p className="small mb-0">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
//                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [role, setRole] = useState("user"); // Default to "user"
  const navigate = useNavigate();

  const usernamechange = (e) => setUsername(e.target.value);
  const emailchange = (e) => setEmail(e.target.value);
  const passwordchange = (e) => setPassword(e.target.value);
  const mobilenumberchange = (e) => setMobilenumber(e.target.value);
  const rolechnage = (e) => setRole(e.target.value);

  async function register(payload) {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        payload
      );
      toast.success(response.data.message || "Registration Successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name: username, email, password, mobileNumber, role };
    register(payload);
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img 
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" 
                        style={{ width: '185px' }} 
                        alt="logo" 
                      />
                      <h4 className="mt-1 mb-5 pb-1">Join The Lotus Team</h4>
                    </div>

                    <form onSubmit={handleSubmit}>

                      <p>Please register your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="role">Role</label>
                        <select 
                          id="role" 
                          className="form-control"
                          required
                          value={role}
                          onChange={rolechnage}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="text" 
                          id="name" 
                          className="form-control"
                          placeholder="Full Name" 
                          required 
                          value={username}
                          onChange={usernamechange}
                        />
                        <label className="form-label" htmlFor="name">Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="text" 
                          id="mobileNumber" 
                          className="form-control"
                          placeholder="Mobile Number" 
                          required 
                          value={mobileNumber}
                          onChange={mobilenumberchange}
                        />
                        <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="email" 
                          id="email" 
                          className="form-control"
                          placeholder="Email Address" 
                          required 
                          value={email}
                          onChange={emailchange}
                        />
                        <label className="form-label" htmlFor="email">Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="password" 
                          id="password" 
                          className="form-control"
                          placeholder="Password" 
                          required 
                          value={password}
                          onChange={passwordchange}
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button 
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" 
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <button 
                          type="button" 
                          className="btn btn-outline-danger"
                          onClick={() => navigate('/login')}
                        >
                          Log in
                        </button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
