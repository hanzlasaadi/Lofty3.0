import React, { useState } from "react";
import "./HomeCss/tab.css";
import NavBar from "../nav-bar/NavBar";
import axios, { all } from "axios";
import { apiUrl } from "../assets/utils/env";

const Tab = ({ isLoggedIn, setIsLoggedIn, authToken }) => {
  const [dataPresent, setDataPresent] = useState(false);
  const [allData, setAllData] = useState({});
  const cusId = localStorage.getItem("customerId");
  console.log(cusId);

  React.useEffect(() => {
    setDataPresent(false);
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Booking/GetAllBooking?CustomerId=${cusId}`,
      })
      .then((res) => {
        console.log(res.data);
        setDataPresent(true);
        setAllData(res.data.data);
      })
      .catch((err) => {
        console.log("errorGettingBookingsData: ", err);
      });
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <ul className="tabs container center-content">
        <li className="tab">
          {/* -----------------------------room page---- */}
          <input type="radio" name="tabs" checked="checked" id="tab1" />
          <label for="tab1">Active</label>
          <div id="tab-content1" className="content">
            {dataPresent && allData.activeBookings.length !== 0 ? (
              <div className="container bg-light mt-3 rounded">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="img-fluid smaller-image mt-2"
                      src={allData.activeBookings[0].adImage1}
                      alt="RoomImg"
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <span className="room-title">
                      {allData.activeBookings[0].roomType}&nbsp;
                      &nbsp;&nbsp;&nbsp;
                      <i className="bi bi-chevron-right ml-5"></i>
                    </span>
                    <p>
                      <span className="titl">&nbsp;</span>
                    </p>
                    <p>
                      <span className="price">
                        RS.{Math.round(allData.activeBookings[0].price)}.0/DAY
                      </span>
                    </p>
                    <p>
                      <i className="bi bi-person custom-icon"></i>
                      <span className="number">
                        {allData.activeBookings[0].noOfPerson}
                      </span>
                      <i className="bi bi-tv custom-icon"></i>
                      <span className="number">
                        {allData.activeBookings[0].noOfBed}
                      </span>
                      {/* <span
                        className="number  "
                        style={{ marginLeft: "350px" }}
                      >
                        2
                      </span>{" "}
                      <span className="number ">Days</span> */}
                    </p>
                  </div>
                  <br />
                  <div className="row border-top text-black">
                    <div className="col-lg-8">
                      <span className="number">Booking in Process....</span>
                    </div>
                    <div className="col-lg-4">
                      &nbsp;&nbsp;
                      <span className="number ml-5">Estimate wait 2 min.</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>No Active Bookings</h2>
            )}
          </div>
        </li>
        {/* ------------------------------------------ */}
        <li className="tab">
          <input type="radio" name="tabs" id="tab2" />
          <label for="tab2">Booked</label>
          <div id="tab-content2" className="content center-content">
            <h2>No Data Found!</h2>
          </div>
        </li>

        <li className="tab">
          <input type="radio" name="tabs" id="tab3" />
          <label for="tab3">Past</label>
          <div id="tab-content2" className="content center-content">
            <h2>No Data Found!</h2>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Tab;
