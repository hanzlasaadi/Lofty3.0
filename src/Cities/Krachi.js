/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import "./Krachi.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
// import Booking from "../Home/Booking";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const Krachi = ({ isLoggedIn, setIsLoggedIn }) => {
  const { cityId } = useParams();
  const [allRooms, setAllRooms] = useState([]);
  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/Customer/GetAllRoomsCityWise?CityId=${cityId}`)
      .then((res) => {
        // if (res.data.result === "error") setAllRooms([]);
        setAllRooms(res.data.data);
        console.log("allRoomsData: ", res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="shop-page pt-30 mb-120">
        <div className="container">
          <div className="row">
            {allRooms?.length === 0 ? null : (
              <div className="col-lg-3">
                <div className="shop-sidebar">
                  {/* <div className="card">
                  <div className="card-body">
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div> */}

                  <div className="shop-widget">
                    <div className="check-box-item">
                      <h5 className="shop-widget-title">Room Types</h5>
                      <div className="checkbox-container">
                        <label className="containerss">
                          Executive
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="containerss">
                          Deluxe
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="containerss">
                          Standard
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="shop-widget">
                    <div className="check-box-item">
                      <h5 className="shop-widget-title">Room Capacity</h5>
                      <div className="checkbox-container">
                        <label className="containerss">
                          Double
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="containerss">
                          Twin
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="containerss">
                          Master
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">
                      Accommodation Features
                    </h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Air Conditioning
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Balcony
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Kitchen
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        TV
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">Meals</h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Breakfast
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Lunch
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Dinner
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        All Inclusive
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            )}
            <div className="col-lg-9">
              {/* <div className="row mb-50">
                <div className="col-lg-12">
                  <div className="multiselect-bar">
                    <h6>LOFTYROOMS</h6>
                    <div className="multiselect-area">
                      <div className="single-select">
                        <span>Show</span>
                        <select
                          className="defult-select-drowpown"
                          id="color-dropdown"
                        >
                          <option selected value="0">
                            12
                          </option>
                          <option value="1">15</option>
                          <option value="2">18</option>
                          <option value="3">21</option>
                          <option value="4">25</option>
                        </select>
                      </div>
                      <div className="single-select two">
                        <select
                          className="defult-select-drowpown"
                          id="eyes-dropdown"
                        >
                          <option selected value="0">
                            Default
                          </option>
                          <option value="1">Grid</option>
                          <option value="2">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* //////////////////////// one Room*/}
              {/* hanzla */}
              {allRooms?.map((room) => {
                return (
                  <div
                    className="row search-card-result rounded-4"
                    key={room.adId}
                  >
                    <div className="col-md-5">
                      {/* 👇️ react router link */}
                      <Link to={`/Booking/${room.adId}`}>
                        <img
                          className="img-fluid rounded-4"
                          src={`${room.adImage1}`}
                          alt="Room Image"
                          loading="lazy"
                        />
                      </Link>
                    </div>

                    <Link className="col-md-7" to={`/Booking/${room.adId}`}>
                      {/* <div className="col-md-7"> */}
                      <span className="room-title">{room.roomType}</span>
                      <p>
                        <span className="titl">&nbsp;</span>
                      </p>
                      <p>
                        <span className="price">
                          RS.{Math.round(room.price)}/DAY
                        </span>
                      </p>
                      <p>
                        <span className="titl">&nbsp;</span>
                      </p>
                      <p>
                        <i className="bi bi-person custom-icon"></i>
                        <span className="number">{room.noOfPerson}</span>
                        <i className="bi bi-tv custom-icon"></i>
                        <span className="number">{room.noOfBed}</span>
                      </p>
                      {/* <div className="review">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <i className="bi bi-star"></i>
                      </div> */}
                    </Link>
                  </div>
                );
              })}
              {allRooms.length === 0 ? (
                <h2 className="p-5">No Data Found!</h2>
              ) : null}
            </div>

            <div className="center-content">
              <div aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Krachi;
