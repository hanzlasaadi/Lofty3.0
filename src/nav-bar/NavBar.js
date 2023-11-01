import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import imgHead from "../assets/images/logo.png";
import Favorite from "../Home/Favorite";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import { apiUrl } from "../assets/utils/env";
import axios from "axios";

const NavBar = ({ isLoggedIn, setIsLoggedIn, authToken }) => {
  const [displayText, setDisplayText] = useState(false);
  const [loginOncHangeData, setLoginOncHangeData] = useState({});
  const [signUpOncHangeData, setSignUpOncHangeData] = useState({});
  const [notificationData, setNotificationData] = useState([]);
  const cusId = localStorage.getItem("customerId");
  const navigate = useNavigate();
  let timer = useRef(null);
  //  <<<<<<<<<<<<<<<<<<<        useEffect    >>>>>>>>>>>>>>>>>>>>>
  const handleClickNotification = () => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Booking/GetAllNotification?CustomerId=${cusId}`,
      })
      .then((res) => {
        console.log(res.data);
        setNotificationData(res.data.data);
      })
      .catch((err) => {
        console.log("errorGettingNotificationData: ", err);
      });
  };
  //  <<<<<<<<<<<<<<<<<<<        Forms handling    >>>>>>>>>>>>>>>>>>>>>
  const SubmitLoginForm = () => {
    console.log("setLoginOncHangeData===>>", loginOncHangeData);
  };
  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value);
  };
  const SubmitSignUpForm = () => {
    console.log("setSignUpOncHangeData===>>", signUpOncHangeData);
  };
  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value);
  };
  const loftyroom = () => {
    navigate("/");
  };
  //  <<<<<<<<<<<<<<<<<<<        WHATSAPP    >>>>>>>>>>>>>>>>>>>>>
  const Whatsapp = () => {
    const phoneNumber = "+923056129012";
    const message = "Hello";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="cover">
        <div className="contents">
          <h1>Contents</h1>
          <span className="close">Close</span>
        </div>
      </div>
      <nav
        nav
        class="navbar navbar-expand-lg navbar-light  bg-light fixed-top "
      >
        <div class="container">
          <a class="navbar-brand Title" href="#">
            <h2 onClick={loftyroom} style={{ cursor: "pointer" }}>
              LOFTYROOMS
            </h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {/* <div className="nav-right d-flex justify-content-end align-items-center"> */}
            {isLoggedIn ? (
              <ul style={{ listStyle: "none" }} className="d-flex">
                <>
                  <li className="align-self-center">
                    <Link to="/Favorite">
                      <svg
                        fill="#272a61"
                        width="15"
                        height="15"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                      </svg>
                    </Link>
                  </li>

                  <li
                    className="align-self-center"
                    onClick={handleClickNotification}
                  >
                    <div className="dropdown">
                      <a
                        href
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          fill="#272a61"
                          height="15"
                          width="15"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 611.999 611.999"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path>{" "}
                                  <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu mt-2 "
                        aria-labelledby="dropdownMenuButton"
                        style={{ width: "300px", marginRight: "100px" }}
                      >
                        {notificationData.length !== 0 ? (
                          <>
                            {notificationData.map((not) => {
                              return (
                                <>
                                  <p className="dropdown-item " href="#">
                                    {not.message || not.Message}
                                  </p>
                                  <hr />
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <p className="dropdown-item" href="#">
                            No New Notifications!
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="align-self-center">
                    <Link to={"/Profile"}>
                      <svg
                        fill="#272a61"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1585_341)">
                          <path d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z" />
                          <path d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z" />
                        </g>
                      </svg>
                    </Link>
                  </li>
                </>
              </ul>
            ) : null}
            {/* </div> */}
            <form class="d-flex">
              {isLoggedIn ? null : (
                <>
                  <p>
                    <Link to={"/Login"} className="btn">
                      Login
                    </Link>
                  </p>
                  <p>
                    <div>/</div>
                  </p>
                  <p>
                    <Link to={"/Signup"} className="btn">
                      Signup
                    </Link>
                  </p>
                </>
              )}
              <button
                onClick={() => {
                  window.location.href = "tel:+923232345673";
                }}
                type="button"
                className="btn btn-outline"
              >
                Call Now
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <header className="header-area style-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <div className="Title">
              <h2 onClick={loftyroom} style={{ cursor: "pointer" }}>
                LOFTYROOMS
              </h2>
            </div>
          </div>

          <div className="nav-right d-flex justify-content-end align-items-center">
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/Favorite">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                      </svg>
                    </Link>
                  </li>

                  <li onClick={handleClickNotification}>
                    <div className="dropdown">
                      <a
                        href
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          fill="#ffffff"
                          height="15"
                          width="15"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 611.999 611.999"
                          stroke="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path>{" "}
                                  <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu mt-2 "
                        aria-labelledby="dropdownMenuButton"
                        style={{ width: "300px", marginRight: "100px" }}
                      >
                        {notificationData.length !== 0 ? (
                          <>
                            {notificationData.map((not) => {
                              return (
                                <>
                                  <p className="dropdown-item " href="#">
                                    {not.message || not.Message}
                                  </p>
                                  <hr />
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <p className="dropdown-item" href="#">
                            No New Notifications!
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={"/Profile"}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1585_341)">
                          <path d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z" />
                          <path d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z" />
                        </g>
                      </svg>
                    </Link>
                  </li>
                </>
              ) : (
                <nav className="navbar navbar-expand-md ">
                  <div className="navbar-nav ml-auto action-buttons">
                    <Link to={"/login"}>
                      <p>Login / Signup</p>
                    </Link>
                  </div>
                </nav>
              )}

              <button
                onClick={() => {
                  window.location.href = "tel:+923232345673";
                }}
                type="button"
                className="btn btn-outline"
              >
                CallNow
              </button>
            </ul>

          </div>
        </div >
      </header > */}
    </>
  );
};

export default NavBar;
