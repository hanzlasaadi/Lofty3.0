import React from "react";
import "./HomeCss/footer.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  // responsive hooks
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
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
              <p style={isMobile || isTablet ? { textAlign: "center" } : {}}>
                Pakistan's leading chain of hotels and rooms.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 third-div">
              <p style={isMobile || isTablet ? { textAlign: "center" } : {}}>
                {" "}
                Stay with us and make yourselves at home!
              </p>
            </div>
            <div className="col-lg-2 col-md-6 last-div">
              <button
                style={isMobile || isTablet ? { textAlign: "center" } : {}}
                onClick={() => nav("/City/1")}
              >
                <i className="bi bi-house-door"></i>
                See Our Rooms
              </button>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between  ">
            <div className="col-lg-6 col-md-6">
              <p>
                © 2023 <b>LOFTYROOMS</b> All Rights Reserved
              </p>
              <p>
                Created by <a href="https://hanzlasaadi.me">Hanzla Saadi</a> &{" "}
                <a href="https://hanzlasaadi.me">Khuram Shehzad</a>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-end">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100094789645678&mibextid=ZbWKwL">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@lofty.rooms?_t=8gkCcGQHzpi&_r=1">
                      <i className="bx bxl-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/lofty.rooms?igshid=MzRlODBiNWFlZA==">
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
