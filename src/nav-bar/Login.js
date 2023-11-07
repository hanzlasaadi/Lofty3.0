import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { BiLogoGoogle } from "react-icons/bi";
// import { BsFacebook } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const Login = ({ isLoggedIn, setIsLoggedIn, setAuthToken }) => {
  // responsive hooks
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  // authentication functionality
  const [loginOncHangeData, setLoginOncHangeData] = React.useState({});
  const nav = useNavigate();

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
        alert("We could not log you in at the moment! Please try again!");
        console.log("Err===->>>", err);
      });
  };

  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value);
  };

  return (
    <>
      <div className="content" style={{ backgroundColor: "#fbfbfb" }}>
        <div
          className="row  d-flex align-items-center text-center"
          style={
            isMobile || isTablet
              ? { width: "80%" }
              : { width: "-webkit-fill-available " }
          }
        >
          <div className="col-lg-6 py-3 text-left rounded bg-dark">
            <form onSubmit={SubmitLoginForm}>
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="form-control"
                  onChange={LoginOnChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="form-control"
                  onChange={LoginOnChange}
                />
              </div>
              <NavLink
                onClick={() =>
                  alert(
                    "Use our mobile application for a secure password change!"
                  )
                }
                to=""
                className="text-white"
              >
                Forgot Password ?
              </NavLink>
              <div class="d-grid gap-2">
                <button
                  onClick={SubmitLoginForm}
                  class="btn login"
                  type="button"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <hr class="style-four" />
            {/* <div className="d-flex">
              <button className="btn w-50 facebook">
                <BsFacebook />
                &nbsp; Login
              </button>{" "}
              &nbsp;
              <button className="btn w-50 google">
                <BiLogoGoogle />
                &nbsp; Login
              </button>
            </div> */}
            <p>
              Don’t have an account?{" "}
              <NavLink to="/Signup" className="text-white">
                Registered
              </NavLink>
            </p>
          </div>
          {/* <div className="col-lg-6">
            <img
              className="img-fluid img"
              src="./public/assets/images/blog/Lahore1.jpg"
              alt="Img"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
