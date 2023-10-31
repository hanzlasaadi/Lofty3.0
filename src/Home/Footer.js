import React from "react";
import "./HomeCss/footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();
  return (
    <>
      <footer className="style2">
        <div className="container footer">
          <div className="row footer-sec1">
            <div className="col-lg-2 col-md-6 first-div">
              <img width={80} height={50} src="./logo.png" alt="Logo" />
            </div>
            <div className="col-lg-4 col-md-6 second-div">
              <p>Pakistan's leading chain of hotels and rooms.</p>
            </div>
            <div className="col-lg-4 col-md-6 third-div">
              <p> Stay with us and make yourselves at home!</p>
            </div>
            <div className="col-lg-2 col-md-6 last-div">
              <button onClick={() => nav("/City/1")}>
                <i className="bi bi-house-door"></i>
                See Our Rooms
              </button>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between  ">
            <div className="col-lg-6 col-md-6">
              <p>© 2023 <b>LOFTYROOMS</b> All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-end">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
