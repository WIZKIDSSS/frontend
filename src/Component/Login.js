import React, { useState } from "react";
// import { doLogin } from "./auth/authindex";
import { useNavigate } from "react-router-dom";
import login_image from "../images/login_image.png";
// import { toast } from 'react-toastify';
// import axios from "axios";
import "./css/Login.css";
import login_background from "../images/login_background.jpg"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  // const navigate = useNavigate();
  // const [message, setMessage] = useState('');

  // const handleLogin = async (e) => {
  //     e.preventDefault();

  //     try {
  //         const response = await axios.post('http://127.0.0.1:5000/login', {
  //             username,
  //             password,
  //         });
  //         if (response.status === 200) {
  //             localStorage.setItem('access_token', response.data.access_token);
  //             setMessage('Login Successful');
  //             console.log(response.data.access_token);
  //             const redirectURL = response.data.redirect_url;
  //             window.location.href = redirectURL;
  //         }
  //     } catch (error) {
  //         setMessage('Invalid username or password');
  //     }
  // };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/login', {
//         username,
//         password,
//       });
//       if (response.status === 200) {
//         localStorage.setItem('access_token', response.data.access_token);
//         setMessage('Login Successful');
//         console.log(response.data.access_token);
//         const redirectURL = response.data.redirect_url;
//         navigate(redirectURL);
//       }
//     } catch (error) {
//       setMessage('Invalid username or password');
//     }
//   };


  return (
    <>
      <form onSubmit={{}}>
        <div style={{"fontFamily" : ['Poppins', "sans-serif"], "backgroundImage": `url(${login_background})`  }}>

        <div class="container d-flex justify-content-center align-items-center min-vh-100" >
          <div class="row border rounded-5 p-3 bg-white shadow box-area">
            <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
              <div class="featured-image mb-3">
                <img
                  src={login_image}
                  className="img-fluid"
                  style={{ width: "400px" }}
                  alt=""
                />
              </div>
              <small
                class="text-white text-wrap text-center"
                style={{
                  width: "17rem",
                  fontFamily: ["Courier New", "Courier", "monospace"],
                }}
              >
                Join experienced Designers on this platform.
              </small>
            </div>

            <div class="col-md-6 right-box">
              <div class="row align-items-center">
                <div class="header-text mb-4">
                  <h2>Hello,Student</h2>
                  <p>We are happy to have you back.</p>
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control form-control-lg bg-light fs-6"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="input-group mb-1">
                  <input
                    type="password"
                    class="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="input-group mb-5 d-flex justify-content-between"></div>
                <div class="input-group mb-3">
                  <button
                    className="btn btn-lg btn-primary w-100 fs-6"
                    style={{ backgroundColor: "orange", color: "black" }} type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </form>
    </>
  );
}