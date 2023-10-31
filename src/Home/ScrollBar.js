import React, { useRef, useEffect, useState } from "react";
import "./HomeCss/ScrollBar.css";
import { useNavigate } from "react-router-dom";
import { dummyCityData } from "../assets/utils/dummyData";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const ScrollBar = () => {
  const [cities, setCities] = useState(dummyCityData);
  const navigate = useNavigate();
  const listRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/Customer/GetAllCities`)
      .then((res) => {
        console.log("getAllRoomsCitywise: ", res);
        setCities(res.data.data);
      })
      .catch((err) => console.log("errorGettingCityData: ", err));
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // if (listRef.current) {
      //   const scrollOffset =
      //     window.pageYOffset || document.documentElement.scrollTop;
      //   listRef.current.scrollTo({
      //     top: 0,
      //     left: scrollOffset,
      //     behavior: "smooth",
      //   });
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const moveLeft = () => {
    console.log("Comment---");
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const moveRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };
  // const handl = () => {
  //   navigate("Lahore");
  // };
  // const hand = () => {
  //   navigate("Karachi");
  // };

  return (
    <>
      {/* <!-- ========== Scroll Bar============= --> */}
      <div>
        <br />
        <div
          className="list-container d-flex align-items-center justify-content-center"
          ref={listRef}
        >
          <ul className="horizontal-list d-flex flex-wrap gap-3 justify-content-center">
            {cities.map((city) => {
              return (
                <li
                  key={city.id}
                  onClick={() => {
                    navigate(`/City/${city.id}`);
                  }}
                >
                  {city.cityName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="ScrolingArrow">
          <div className="essential-items-area mb-120">
            <div className="section-title3"></div>
            <div className="slider-btn-wrap">
              {/* <div className="slider-btn prev-btn-12">
                <i
                  onClick={moveLeft}
                  className="bi bi-arrow-left"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="slider-btn next-btn-12">
                <i
                  onClick={moveRight}
                  className="bi bi-arrow-right"
                  style={{ cursor: "pointer" }}
                ></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ========== Scroll Bar============= --> */}
    </>
  );
};

export default ScrollBar;
