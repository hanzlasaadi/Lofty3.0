import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { BiLogoGoogle } from "react-icons/bi";
// import { BsFacebook } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const Signup = ({ isLoggedIn, setIsLoggedIn, setAuthToken }) => {
  // responsive media queries
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  // authentication functionality
  const [signUpOncHangeData, setSignUpOncHangeData] = React.useState({});
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

        console.log("Successfully Signed Up!");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    console.log(signUpOncHangeData);
  };

  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value);
  };

  return (
    <div>
      <div className="content">
        <div
          className="row  d-flex align-items-center text-center"
          style={isMobile || isTablet ? { width: "80%" } : { width: "40%" }}
        >
          <div className="col-lg-6 py-3 text-left rounded bg-dark">
            <div className="rizwan-form">
              <label for="exampleInputPassword1">Enter Your Name</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="text"
                name="CustomerName"
                placeholder="Full Name"
                onChange={SignUpOnChange}
                required
              />
              <br />
              <label for="exampleInputPassword1">Email</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="email"
                name="Email"
                placeholder="Email"
                onChange={SignUpOnChange}
                required
              />
              <br />
              <label for="exampleInputPassword1">Phone No</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="tel"
                name="Mobile"
                placeholder="Mobile"
                onChange={SignUpOnChange}
                required
              />
              <br />
              <label for="exampleInputPassword1">CNIC</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="text"
                name="Cnic"
                placeholder="Cnic"
                onChange={SignUpOnChange}
                required
              />
              <br />
              <label for="exampleInputPassword1">Password</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="password"
                name="Password"
                placeholder="Password"
                onChange={SignUpOnChange}
                required
              />
            </div>
            <div class="d-grid gap-2">
              <button
                onClick={SubmitSignUpForm}
                class="btn login"
                type="button"
              >
                LOGIN
              </button>
            </div>
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
            <NavLink to="/Rizwan_Login" className="text-white">
              Already have an account?
            </NavLink>
            <NavLink to="/Rizwan_Login" className="text-white">
              {" "}
              Login
            </NavLink>
          </div>
          {/* <div className="col-lg-6">
            <img className="img-fluid img" src="sing.png" alt="Signup Img" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
