import React, { useState } from "react";
import "./HomeCss/Booking.css";
import Footer from "./Footer";
import NavBar from "../nav-bar/NavBar";
// import Clinder from "./Clinder";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { dummyRoomDetails } from "../assets/utils/dummyData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Booking = ({ isLoggedIn, setIsLoggedIn, authToken, favRoomsId }) => {
  console.log(isLoggedIn, "inBookingLoggedIn? true or false");
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(dummyRoomDetails);
  const [cusId, setCusId] = useState(localStorage.getItem("customerId"));
  const [isFav, setIsFav] = useState(false);
  const [favRoomId, setFavRoomId] = useState(null);

  React.useEffect(() => {
    // setIsFav(Boolean(localStorage.getItem("isFav")));
    // const favRooms = localStorage.getItem('favRoomsId');

    axios
      .get(`${apiUrl}/api/Customer/GetRoomDeatil?AdID=${roomId}`)
      .then((res) => {
        console.log(res.data.data);
        console.log(favRoomsId);
        setRoomDetails(res.data.data);
        setFavRoomId(res.data.data.roomDetail.adId);
        setIsFav(favRoomsId.includes(`${res.data.data.roomDetail.adId}`));

        // not setting fav room from api because of bug
        // setIsFav(res.data.data.roomDetail.isFavourite);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddRemoveFav = () => {
    console.log(isFav, "isFav");
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Customer/IsFavouriteRoom?AdId=${favRoomId}&IsFavourite=${!isFav}&CustomerId=${cusId}`,
      })
      .then((res) => {
        console.log(res, "res");
        setIsFav(!isFav);
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-wrapper">
              <div className="error-img">
                <img
                  className="img-fluid rounded-4"
                  src={roomDetails.roomImages[0]}
                  loading="lazy"
                  alt="Room Img"
                />
                {isLoggedIn ? (
                  <div className="icon-img">
                    <a href="#" onClick={handleAddRemoveFav} className="link">
                      {isFav ? (
                        <svg
                          width="30"
                          height="20"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4466 0.956185C12.7296 -0.511342 10.2009 -0.230326 8.60876 1.39332L8.01561 2.0178L7.39124 1.39332C5.83031 -0.230326 3.27039 -0.511342 1.55338 0.956185C-0.413391 2.64228 -0.507046 5.63978 1.24119 7.45077L7.29758 13.6956C7.67221 14.1015 8.32779 14.1015 8.70242 13.6956L14.7588 7.45077C16.507 5.63978 16.4134 2.64228 14.4466 0.956185Z"
                            fill="blue"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="30"
                          height="20"
                          viewBox="0 0 14 13"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-circle"
                        >
                          <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                        </svg>
                      )}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-1">
          <h2 className="Deluxe">{roomDetails.roomDetail.roomType}</h2>
          <h3 className="FACILITES">FACILITES</h3>
          <div className="row-ico d-flex">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {roomDetails.facilityList.map((fac, i) => {
                return (
                  <SwiperSlide className="ico c col-lg-2" key={i}>
                    {/* <div className="ico c col-lg-2" key={i}> */}
                    <img
                      className=""
                      src={fac.image}
                      alt={fac.facilityName}
                      loading="lazy"
                    />
                    <span className="number">{fac.facilityName}</span>
                    {/* </div> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <h3 className="FACILITES">GALLERY</h3>
          <div className="row gutters justify-content-center">
            {roomDetails.roomImages.slice(1).map((img, i) => {
              return (
                <div className="col-lg-4 col-md-4 col-xs-6 thumb" key={i}>
                  <a href={img} className="fancybox" rel="ligthbox">
                    <img
                      src={img}
                      className="zoom img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="container ">
            <h3 className="FACILITES locatoin">
              ABOUT HOTEL
              <a
                target="blank"
                href={`https://www.google.com/maps/@${roomDetails.roomDetail.latitude},${roomDetails.roomDetail.longitude},20z`}
              >
                <img
                  alt="location"
                  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png"
                />
              </a>
            </h3>
            <div className="bor shadow  ">
              <div className="col">
                <h5 className="b">Hotel Name:</h5>
                <br />
                <h5 className="a">{roomDetails.roomDetail.hotelName}</h5>
              </div>
              <div className="col">
                <h5 className="b">Location:</h5>
                <br />
                <h5 className="a">{roomDetails.roomDetail.location}</h5>
              </div>
              <div className="col">
                <h5 className="b">Room Number:</h5>
                <br />
                <h5 className="a">{roomDetails.roomDetail.roomNo}</h5>
              </div>
            </div>
          </div>
          <br />
          <div className="error">
            <Link to={`/Veiw/${roomDetails.roomDetail.partnerId}`}>
              <a href="#">
                <button type="button" className="btn btn-primary btn-lg ">
                  View Hotel Detail <i className="bi bi-chevron-right"></i>
                </button>
              </a>
            </Link>
          </div>
          <h3 className="FACILITES locatoin">DESCRIPTION</h3>
          <div className="best">{roomDetails.roomDetail.description}</div>

          <div className="err">
            {isLoggedIn ? (
              <Link to={`/Clinder/${roomDetails.roomDetail.adId},${cusId}`}>
                <button type="button" className="btn btn-primary btn-lg">
                  <span className="">
                    Rs.{Math.round(roomDetails.roomDetail.price)}/
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOOK NOW{" "}
                  <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            ) : (
              <Link to={`/login`}>
                <button type="button" className="btn btn-primary btn-lg">
                  Login to Book Now <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};
export default Booking;
