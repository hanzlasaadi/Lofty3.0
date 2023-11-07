import React, { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const Favorat = ({
  isLoggedIn,
  setIsLoggedIn,
  authToken,
  favRooms,
  setFavRooms,
  setFavRoomsId,
}) => {
  const [customerId, setCustomerId] = useState(
    localStorage.getItem("customerId")
  );
  // const customerId = localStorage.getItem("customerId");
  console.log(customerId, "cusId USeEffect");

  React.useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Customer/GetAllFavouriteRoomList?CustomerId=${customerId}`,
      })
      .then((res) => {
        console.log(res.data);
        setFavRooms(res.data.data);
        localStorage.setItem(
          "favRooms",
          res.data.data.map((roomDetails) => roomDetails.adId)
        );
        setFavRoomsId(localStorage.getItem("favRooms"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {favRooms.map((room, i) => {
        return (
          <div className="container bg-light mt-5 rounded-4" key={i}>
            <div className="row">
              <div className="col-md-4">
                <img
                  className="img-fluid smaller-image"
                  src={room.adImage1}
                  alt="roomImg"
                />
              </div>
              <div className="col-md-4 mt-3">
                <span className="room-title">{room.roomType}</span>
                <p>
                  <span className="titl">&nbsp;</span>
                </p>
                <p>
                  <span className="price">RS.{Math.round(room.price)}/DAY</span>
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
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="container bg-light mt-3 rounded">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid smaller-image"
              src="..\assets\images\blog\Lahore4.jpg"
              alt="roomImg"
            />
          </div>
          <div className="col-md-4 mt-3">
            <span className="room-title">SUIT</span>
            <p>
              <span className="titl">
                Join over 1 Million of users. Dignissimos asspaneriores vitae
                velit veniam
              </span>
            </p>
            <p>
              <span className="price">RS.4500.0/DAY</span>
            </p>
            <p>
              <i className="bi bi-person custom-icon"></i>
              <span className="number">4</span>
              <i className="bi bi-tv custom-icon"></i>
              <span className="number">2</span>
            </p>
            <div className="review">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Favorat;
