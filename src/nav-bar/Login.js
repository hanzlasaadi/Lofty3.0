import React from "react";
import { NavLink } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <div className="content">
        <div
          className="row  d-flex align-items-center text-center"
          style={{ width: "-webkit-fill-available" }}
        >
          <div className="col-lg-6 py-3 text-left rounded bg-dark">
            <form action="" onSubmit="">
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <NavLink to="" className="text-white">
                Forgot Password ?
              </NavLink>
              <div class="d-grid gap-2">
                <button class="btn login" type="button">
                  LOGIN
                </button>
              </div>
            </form>
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
            <p>
              Don’t have an account?{" "}
              <NavLink to="/Rizwan_Sing_up" className="text-white">
                Registered
              </NavLink>
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid img"
              src="./public/assets/images/blog/Lahore1.jpg"
              alt="Img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
