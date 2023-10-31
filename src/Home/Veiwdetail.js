import React from "react";
import "./HomeCss/veiw.css";
import NavBar from "../nav-bar/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { partnerDummyData } from "../assets/utils/dummyData";
const Veiw = ({ isLoggedIn, setIsLoggedIn }) => {
  const [partnerData, setPartnerData] = React.useState(partnerDummyData);
  const { partnerId } = useParams();
  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/Partners/GetPartnerProfile?PartnerId=${partnerId}`)
      .then((res) => setPartnerData(res.data.data))
      .catch((err) => console.log("error fetching partnerData: ", err));
  }, []);
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <div
          className="row   h-75 text-white rounded"
          style={{ background: "#272a61" }}
        >
          <div className="col-lg-8 mt-3">
            <p className="text-white">Hotel Name:</p>
          </div>
          <div className="col-lg-4 mb-5 mt-3">
            <h4 className="text-white">
              {partnerData.partnerProfile.hotelName}
            </h4>
          </div>
          <div className="row  ">
            <div className="col-lg-8">
              <p className="text-white">Email:</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4 className="text-white">{partnerData.partnerProfile.email}</h4>
            </div>
          </div>
        </div>

        <ul className="tabs container center-content">
          <li className="tab">
            {/* -----------------------------room page---- */}
            <input type="radio" name="tabs" checked="checked" id="tab1" />
            <label for="tab1">Rooms</label>
            <div id="tab-content1" className="content">
              {partnerData.partnerAds.map((room) => {
                return (
                  <div className="container bg-light mt-4 rounded">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          className="img-fluid smaller-image mt-2"
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </li>
          {/* ------------------------------------------ */}
          <li className="tab">
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2">Reviews</label>
            <div id="tab-content2" className="content center-content">
              <h2 className="mt-5 mr-8">No Reviews Yet!</h2>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Veiw;
