import React from "react";
import "./HomeCss/Conform.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { dummyBookRoomDetails } from "../assets/utils/dummyData";
import { differenceInDays, formatISO } from "date-fns";

const Conformbook = ({
  isLoggedIn,
  setIsLoggedIn,
  authToken,
  datePickerState,
}) => {
  const [bookRoomDetails, setBookRoomDetails] =
    React.useState(dummyBookRoomDetails);
  const { roomIdCusId } = useParams();
  const [roomId, cusId] = roomIdCusId.split(",");

  const startDate = new Date(
    datePickerState.from.year,
    datePickerState.from.month,
    datePickerState.from.day
  );
  const endDate = new Date(
    datePickerState.to.year,
    datePickerState.to.month,
    datePickerState.to.day
  );

  const differenceDays = differenceInDays(endDate, startDate);

  React.useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Booking/BookRoomDetail?AdId=${roomId}`,
      })
      .then((res) => {
        console.log(res.data.result, " :dataResult");
        setBookRoomDetails(res.data.data);
      })
      .catch((err) => console.log("bookingConfirmError: ", err));
  }, []);

  // CReate Booking
  const handleCreateBooking = () => {
    // console.log(formatISO(datePickerState[0].endDate));
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "POST",
        url: `${apiUrl}/api/Booking/CreateBooking`,
        data: {
          // BookingNumber = GetRandomNumberNumeric(),
          // BookingDate = DateTime.Now,
          AdId: roomId,
          CustomerId: cusId,
          Price: bookRoomDetails.roomDetail.price,
          CommissionPrice: 0,
          //Paid = false,
          CheckedIn: formatISO(startDate),
          CheckOut: formatISO(endDate),
          // Status = BookingStatus.Active,
          // PaidStatus = CheckPaid.None,
          // IsDeleted = false,
          // CreatedDate = DateTime.Now,
        },
      })
      .then((res) => {
        console.log(res.data, " :dataResult");
        // setBookRoomDetails(res.data.data);
      })
      .catch((err) => console.log("bookingConfirmError: ", err));
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div id="popup1" className="overlay">
        <div className="popup ">
          <div className="center-content">
            <img
              src="https://media.istockphoto.com/id/1425217376/vector/a-checkmark-that-looks-like-it-was-written-with-a-pen.jpg?s=612x612&w=0&k=20&c=ZJLNQ2Yjh5gmFJyDnLngB_Bju2Fb-LjvEa7YRUsjA_k="
              style={{ width: "70%" }}
              alt="logo"
            />
          </div>

          <div className="center-content ">
            <p>
              <h1>BOOKING REQUEST</h1>
            </p>
          </div>
          <div className="center-content">
            <p>SUBMITTED SUCCESSFULLY!</p>
          </div>
          <Link to={"/tab"}>
            <div className="error-k text-center">
              <a href className="btn btn-primary btn-lg mb-3 w-85  mt-5">
                My Bookings
              </a>
            </div>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="container multiselect-bar bg-light mt-3 rounded ml-4">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid smaller-image"
                src={bookRoomDetails.roomImages[0]}
                alt="RoomImg"
              />
            </div>
            <div className="  col-md-4 mt-3">
              <span className="room-title">
                {bookRoomDetails.roomDetail.roomType}
              </span>
              <p>
                <span className="titl">&nbsp;</span>
              </p>
              <p>
                <span className="price">
                  RS.{Math.round(bookRoomDetails.roomDetail.price)}/DAY
                </span>
              </p>
              <p>
                <span className="titl">&nbsp;</span>
              </p>
              <p>
                <i className="bi bi-person custom-icon"></i>
                <span className="number">4</span>
                <i className="bi bi-tv custom-icon"></i>
                <span className="number">2</span>
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
        {/* ------------------------------ */}
        <div className="container">
          <h3 className="FACILITES locatoin">
            ABOUT HOTEL
            {/* <img  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" /> */}
          </h3>
          <div className="bor row shadow">
            <div className="col-lg-8 ">
              <h5 className="b">Hotel Name:</h5>
              <br />
              <h5 className="a">Location:</h5>
            </div>

            <div className="col-lg-4">
              <h5 className="b">{bookRoomDetails.roomDetail.hotelName}</h5>
              <br />
              <h5 className="a">{bookRoomDetails.roomDetail.location}</h5>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}

        <div className="container">
          <h3 className="FACILITES locatoin">RESERVATION DETAIL</h3>
          <div className="bor row shadow">
            <div className="col-lg-8 ">
              <h5 className="b">Person Name:</h5>
              <br />
              <h5 className="b">Email:</h5>
              <br />
              <h5 className="a">Check In:</h5>
              <br />
              <h5 className="a">Check Out:</h5>
            </div>

            <div className="col-lg-4">
              <h5 className="b">{localStorage.getItem("customerName")}</h5>
              <br />
              <h5 className="a">{localStorage.getItem("email")}</h5>
              <br />
              <h5 className="a">
                {formatISO(startDate, {
                  representation: "date",
                })}
              </h5>
              <br />
              <h5 className="a">
                {formatISO(endDate, {
                  representation: "date",
                })}
              </h5>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className="container  mt-3">
          <div className="row usman shadow">
            <div className="col-lg-8 ">
              <h3 className="FACILITES locatoin">PRICE/DAY</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 className="a mb-4">
                RS.{Math.round(bookRoomDetails.roomDetail.price)}
              </h5>
            </div>
          </div>
        </div>
        <div className="container  mt-2">
          <div className="row usman shadow">
            <div className="col-lg-8 ">
              <h3 className="FACILITES locatoin">DAYS</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 className="a mb-4">{differenceDays}</h5>
            </div>
          </div>
        </div>
        <div className="container mb-3 mt-2">
          <div className="row usman shadow">
            <div className="col-lg-8 ">
              <h3 className="FACILITES locatoin">TOTAL</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 className="a mb-4">
                RS.
                {Math.round(bookRoomDetails.roomDetail.price * differenceDays)}
                .0
              </h5>
            </div>
          </div>
        </div>
        <div className="error-k text-center" onClick={handleCreateBooking}>
          <a
            type="button"
            href="#popup1"
            className="btn btn-primary btn-lg mb-3 w-25 "
          >
            CONFIRM
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Conformbook;
