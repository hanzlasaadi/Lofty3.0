import React, { useState } from "react";
import "./HomeCss/NearBy.css";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const NearBy = ({ cities }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [radius, setRadius] = useState(null);
  const [nearByData, setNearByData] = useState(null);
  const [isNearbyPresent, setIsNearbyPresent] = useState(false);
  const navigate = useNavigate();
  console.log(nearByData, " :nearbydata");

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/Customer/GetAllNearByRooms`, {
        params: {
          latitude: latitude,
          longitude: longitude,
          radius: radius,
        },
      })
      .then((res) => {
        console.log("useEffect res:", res);
        setNearByData(res.data.data);
        if (res.data.result === "success") setIsNearbyPresent(true);
      })
      .catch((err) => {
        console.log("err===>>>", err);
      });
  }, [latitude, longitude, radius]);

  const abc = () => {
    if (radius === null && longitude === null && latitude === null) {
      if ("geolocation" in navigator) {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        });
      } else {
        console.log("Geolocation is not available in this browser.");
      }

      // Set the radius value (you can adjust this as needed)
      const defaultRadius = 1000; // in meters
      setRadius(defaultRadius);
    } else if (radius && longitude && latitude) {
      axios
        .get(`${apiUrl}/api/Customer/GetAllNearByRooms`, {
          params: {
            latitude: latitude,
            longitude: longitude,
            radius: radius,
          },
        })
        .then((res) => {
          setNearByData(res.data.data);
          setIsNearbyPresent(true);
          console.log("abc func: res: ", res);
        })
        .catch((err) => {
          console.log("error getting nearby data: ", err);
        });
    }
  };

  const handleBookNowClick = (adId) => {
    console.log("book now, adId: ", adId);
    navigate(`/booking/${adId}`);

    // You can perform any additional actions here, such as booking the room.
  };

  return (
    <>
      {/* <!-- ==========  NearBy  ============= --> */}
      <div className="home3-blog-area mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div
                className="section-title3"
                // w-100 d-flex gap-2 align-items-center justify-content-between
              >
                <h2>
                  <span style={{ color: "#272a61" }}>NearBy</span>
                </h2>
                {/* <span className="d-lg-none d-md-none d-xl-none align-self-end fw-bold">
                  <a href onClick={abc}>
                    Show Nearby Rooms
                  </a>
                </span> */}
              </div>
              {isNearbyPresent ? (
                <div
                  className="h3-view-btn d-md-flex d-none"
                  onClick={() => navigate(`/City/1`)}
                >
                  <span className="nearbyViewAll" style={{ cursor: "pointer" }}>
                    See all rooms&nbsp;&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-arrow-right-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                    {/*   x<img src="assets/images/icon/haf-button-2.svg"  alt="Image_No_Show" /> */}
                  </span>
                </div>
              ) : (
                <div className="h3-view-btn d-md-flex d-none" onClick={abc}>
                  <span className="nearbyViewAll" style={{ cursor: "pointer" }}>
                    Location Permission Required&nbsp;&nbsp;
                    <svg
                      fill="#272a61"
                      version="1.1"
                      width="30"
                      height="30"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 395.71 395.71"
                      stroke="#272a61"
                      strokeWidth="0.0039571"
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
                          <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    {/*   x<img src="assets/images/icon/haf-button-2.svg"  alt="Image_No_Show" /> */}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <Swiper
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {nearByData?.map((nearbyRoom, i) => {
                return (
                  <SwiperSlide className="col-lg-4 col-md-6 col-sm-10" key={i}>
                    {/* <div className="col-lg-4 col-md-6 col-sm-10" key={i}> */}
                    <div className="blog-card3">
                      <div className="blog-img">
                        <img
                          className="img-fluid"
                          src={nearbyRoom.adImage1}
                          alt="roomImg"
                        />
                      </div>
                      <div className="bolg-content">
                        <div className="cetagoty">
                          <a
                            className="cursor-pointer"
                            href
                            onClick={() => handleBookNowClick(nearbyRoom.adId)}
                          >
                            Book Now
                          </a>
                        </div>
                        <div className="blog-meta">
                          <ul>
                            <li>
                              <a href="blog-grid.html">
                                {nearbyRoom.roomType}{" "}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.
                                {nearbyRoom.price}/-
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <h4>
                        <a href="blog-details.html">
                          A Best room, For tourist to stay
                        </a>
                      </h4> */}
                      </div>
                    </div>
                    {/* </div> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-card3">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Image_No_Show"
                  />
                </div>
                <div className="bolg-content">
                  <div className="cetagoty">
                    <a href="blog-grid.html">Book Now</a>
                  </div>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <a href="blog-grid.html">
                          Tourism Hotel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 3900/-
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      A Best room, For tourist to stay
                    </a>
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
          {isNearbyPresent ? (
            <div className="row d-md-none d-block pt-30">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="h3-view-btn">
                  <a href onClick={() => navigate(`/City/1`)}>
                    View All Rooms
                    <img
                      src="assets/images/icon/haf-button-2.svg"
                      alt="Image_No_Show"
                    />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="row d-md-none d-block pt-30">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="h3-view-btn">
                  <a href onClick={abc} style={{ cursor: "pointer" }}>
                    View All Nearby Rooms
                    <img
                      src="assets/images/icon/haf-button-2.svg"
                      alt="Image_No_Show"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <!-- ==========  NearBy  ============= --> */}
    </>
  );
};

export default NearBy;
