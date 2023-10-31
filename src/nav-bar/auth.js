/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./auth.css";
import { apiUrl } from "./../assets/utils/env";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function LoginSignup({
  isLoggedIn,
  setIsLoggedIn,
  setAuthToken,
}) {
  const [signUpOncHangeData, setSignUpOncHangeData] = useState({});
  const [loginOncHangeData, setLoginOncHangeData] = useState({});
  const nav = useNavigate();

  // form transform css functionality
  React.useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("auth-right-panel-active");
    });
    signInButton.addEventListener("click", () => {
      container.classList.remove("auth-right-panel-active");
    });
  }, []);

  // check isLoggedIn = true || false
  React.useEffect(() => {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      setIsLoggedIn(true);
      console.log("token is present: ", checkToken);
    } else if (
      checkToken === "" ||
      !checkToken ||
      checkToken === undefined ||
      checkToken === null
    ) {
      setIsLoggedIn(false);
      console.log("token not present: ", checkToken);
    }
  }, []);
  //  <<<<<<<<<<<<<<<<<<<        Forms handling    >>>>>>>>>>>>>>>>>>>>>
  // <<<<   Submit SIGN-IN handler   >>>>>
  const SubmitLoginForm = (e) => {
    e.preventDefault();
    console.log(loginOncHangeData);
    loginOncHangeData.androidFcmToken = "";
    loginOncHangeData.iosFcmToken = "";
    axios
      .post(`${apiUrl}/api/Customer/Login`, loginOncHangeData)
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            response.data.message || "Could'nt Login, Try Later!"
          );

        let res = response.data.data;
        localStorage.setItem("token", res.token);
        localStorage.setItem("customerId", res.customerId);
        localStorage.setItem("customerName", res.customerName);
        localStorage.setItem("email", res.email);
        localStorage.setItem("mobile", res.mobile);
        localStorage.setItem("favRooms", []);
        setIsLoggedIn(true);
        nav("/");
      })
      .catch((err) => {
        console.log("Err===->>>", err);
      });
  };

  // <<<<   Submit SIGN-UP handler   >>>>>
  const SubmitSignUpForm = (e) => {
    e.preventDefault();
    // let formdata = new FormData();
    // formdata.append("CustomerId", cusId);
    // formdata.append("CustomerName", accountOnChangeData.CustomerName);
    // axios
    // .post(`${apiUrl}/api/Customer/AddUpdateCustomer`, formdata)

    const signupFormData = new FormData();
    for (let key in signUpOncHangeData) {
      signupFormData.append(key, signUpOncHangeData[key]);
      // console.log(key, signUpOncHangeData[key]);
    }
    axios
      .post(`${apiUrl}/api/Customer/AddUpdateCustomer`, signupFormData)
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            response.data.message || "Could not signup! Try Again"
          );

        const res = response.data.data;
        localStorage.setItem("token", res.token);
        localStorage.setItem("customerId", res.customerId);
        localStorage.setItem("customerName", res.customerName);
        localStorage.setItem("email", res.email);
        localStorage.setItem("mobile", res.mobile);
        localStorage.setItem("favRoomsId", []);
        localStorage.setItem("ImagePath", "");
        setIsLoggedIn(true);
        setAuthToken(res.token);
        nav("/");

        console.log("Successfully Logged In!");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    console.log(signUpOncHangeData);
  };
  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value);
  };

  // <<<<           LOG-OUT          >>>>>
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value);
  };
  // const loftyroom = () => {
  //   navigate("/");
  // };

  return (
    <div className="body-container">
      <div className="auth-container" id="container" >
        <div className="auth-form-container auth-sign-up-container">
          <form className="bg-light" onSubmit={SubmitSignUpForm}>
            <div className="rizwan-form container">
              <label for="exampleInputPassword1">Enter Your Name</label>
              <br />
              <input className="mb-1 rounded w-100" type="text" name="CustomerName"
                placeholder="Full Name" onChange={SignUpOnChange} required />
              <br />
              <label for="exampleInputPassword1">Email</label>
              <br />
              <input
                className="mb-1 rounded w-100" type="email" name="Email"
                placeholder="Email" required onChange={SignUpOnChange}
              />
              <br />
              <label for="exampleInputPassword1">Phone No</label>
              <br />
              <input
                className="mb-1 rounded w-100" type="tel" name="Mobile"
                placeholder="Mobile" required onChange={SignUpOnChange} />
              <br />
              <label for="exampleInputPassword1">CNIC</label>
              <br />
              <input
                className="mb-1 rounded w-100" type="text" name="Cnic" placeholder="Cnic _____-_______-_"
                required onChange={SignUpOnChange} />
              <br />
              <label for="exampleInputPassword1">Password</label>
              <br />
              <input className="mb-1 rounded w-100" type="password" name="Password" placeholder="Password" required onChange={SignUpOnChange}
              />
              <br />
              <div className="error-k mx-auto text-center">
                <button type="button" onClick={SubmitSignUpForm} className="btn btn-primary btn-lg"> Create Account </button>
              </div>
              <p className="text-dark"> Already have an account?
                <a className="auth-ghost" id="signIn" style={{ color: "blue", cursor: "pointer" }} >
                  LogIn
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="auth-form-container auth-sign-in-container">
          <form onSubmit={SubmitLoginForm}>
            <h1> Login Now</h1>
            <div className="text-center" style={{ marginBlockStart: "-50px" }}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                className="w-50" alt="logo" />
              <h4 className=" text-danger">We are The Lotus Team</h4>
            </div>

            <div className="container">
              <label for="exampleInputPassword1">Email</label>
              <br />
              <input
                className="mb-2 rounded w-100"
                type="email"
                name="Email"
                placeholder="Email"
                required
                onChange={LoginOnChange}
              />
              <br />
              <label for="exampleInputPassword1">Password</label>
              <br />
              <input
                className="mb-2 rounded w-100"
                type="password"
                name="Password"
                placeholder="Password"
                required
                onChange={LoginOnChange} />
              <div className="text-center mx-auto ">
                <div className="d-flex">
                  <a href="#"> Forgot Your Password? </a>
                  <p> <a className="auth-ghost" id="signUp" style={{ color: "blue", cursor: "pointer" }} >
                    Sign Up </a> </p>
                </div>
                <div className="error-k ml-3 mt-2">
                  <button type="button" onClick={SubmitLoginForm} className="btn btn-primary">
                    Log In </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="auth-overlay-panel auth-overlay-left">
              <img
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                height="480"
                width="500"
                alt="img1"
              />
            </div>
            <div className="auth-overlay-panel auth-overlay-right">
              <img
                src="https://media.istockphoto.com/id/1249282831/photo/modern-bedroom-with-wood-floor-and-rug.jpg?s=612x612&w=0&k=20&c=4AgSikigZJLK4uYC2b3G0Bjv6r8eBLog88TkVm3So3E="
                alt="movie-2"
                height="480"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
