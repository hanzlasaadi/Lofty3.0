import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const Signup = () => {
  return (
    <div>
      <div className="content">
        <div className="row  d-flex align-items-center text-center">
          <div className="col-lg-6 py-3 text-left rounded bg-dark">
            <div className="rizwan-form">
              <label for="exampleInputPassword1">Enter Your Name</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="text"
                name="CustomerName"
                placeholder="Full Name"
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
                required
              />
              <br />
              <label for="exampleInputPassword1">CNIC</label>
              <br />
              <input
                className="mb-1 rounded w-100"
                type="text"
                name="Cnic"
                placeholder="Cnic _____-_______-_"
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
                required
              />
            </div>
            <div class="d-grid gap-2">
              <button class="btn login" type="button">
                LOGIN
              </button>
            </div>
            <hr class="style-four" />
            <div className="d-flex">
              <button className="btn w-50 facebook">
                <BsFacebook />
                &nbsp; Login
              </button>{" "}
              &nbsp;
              <button className="btn w-50 google">
                <BiLogoGoogle />
                &nbsp; Login
              </button>
            </div>
            <NavLink to="/Rizwan_Login" className="text-white">
              Already have an account?
            </NavLink>
            <NavLink to="/Rizwan_Login" className="text-white">
              {" "}
              Login
            </NavLink>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid img" src="sing.png" alt="Signup Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
