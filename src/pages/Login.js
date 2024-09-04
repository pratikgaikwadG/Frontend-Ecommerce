import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlerole = (e) => {
    setRole(e.target.value);
  };

  const handleemail = (e) => {
    setEmail(e.target.value);
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  async function login(payload) {
    try {
      const response = await axios.post("http://localhost:5001/api/users/login", payload);
      const { access: token } = response.data;
      setToken(token);
      setSuccess(response.data.success);
      localStorage.setItem("token", token);
      toast.success("Logged in successfully");
      return response.data.success;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid Email or Password");
      } else if (error.response && error.response.status === 404) {
        toast.error("User is not registered");
      } else {
        toast.error("Login failed. Please try again.");
      }
      return success;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await login({ role, email, password });
    if (success) {
      // If login is successful, navigate to the dashboard route
      navigate("/dashboard");
    }
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
                      <h4 className="mt-1 mb-5 pb-1">Welcome Back</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input 
                          type="email" 
                          id="email" 
                          className="form-control"
                          placeholder="Email Address" 
                          onChange={handleemail}
                          required 
                        />
                        <label className="form-label" htmlFor="email">Email</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input 
                          type="password" 
                          id="password" 
                          className="form-control"
                          placeholder="Password" 
                          onChange={handlepassword}
                          required 
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button 
                          data-mdb-button-init 
                          data-mdb-ripple-init 
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" 
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button 
                          type="button" 
                          data-mdb-button-init 
                          data-mdb-ripple-init 
                          className="btn btn-outline-danger"
                          onClick={() => navigate('/register')}
                        >
                          Create new
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

export default Login;
