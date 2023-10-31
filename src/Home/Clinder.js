import React from "react";
import "./HomeCss/Clinder.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

// import Conformbook from "./Conformbook";
import { Link, useParams } from "react-router-dom";
import { formatISO } from "date-fns";
const Clinder = ({
  isLoggedIn,
  setIsLoggedIn,
  datePickerState,
  setDatePickerState,
}) => {
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Pick a Date"
      // value={datePickerState ? `✅: ${datePickerState.day}` : ""}
      style={{
        textAlign: "center",
        // padding: "1rem 1.5rem",
        fontSize: "1rem",
        border: "1px solid #272a61",
        borderRadius: "100px",
        // boxShadow: "0 1.5rem 2rem grey",
        color: "#272a61",
        backgroundColor: "#fff",
        outline: "none",
        alignSelf: "center",
        width: "100%",
      }}
      className="my-custom-input-class" // a styling class
    />
  );
  const { roomId } = useParams();
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <div className="row br flex">
          <br />
          <br />
          {/* <div className="row">
            <div className="col-lg-12">
              <h5>DATE</h5>
            </div>
            <br />
            <br />
            <br />
          </div> */}
          <div className="col-lg-4 align-self-center">
            <div className="d-flex justify-content-evenly">
              <h4 className="text-black align-self-center">Dates:&nbsp;</h4>
              <DatePicker
                value={datePickerState}
                onChange={setDatePickerState}
                inputPlaceholder="Select a day"
                renderInput={renderCustomInput}
                colorPrimary="rgb(39, 42, 97)"
                colorPrimaryLight="rgba(39, 42, 97, 0.4)"
                shouldHighlightWeekends
              />
            </div>
          </div>
          {/* <div className="col-lg-4 text-center text-black">to</div> */}
          {/* <div className="col-lg-4">
            <div className="form-group">
              <input
                id="dp2"
                type="text"
                className="form-control clickable input-md"
                // id="DtChkOut"
                placeholder="&#xf133;  Check-Out"
              />
            </div>
          </div> */}
        </div>
        <br />
        <br />
        <div className="error-h text-center">
          <h2>Note</h2>
          <div className="badge  text-wrap">
            All Booking will have Standard Checkin and Checkout time 12PM . 12PM
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="error-k text-center">
          <Link to={`/Conformbook/${roomId}`}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                console.log(
                  formatISO(
                    new Date(
                      datePickerState.from.year,
                      datePickerState.from.month,
                      datePickerState.from.day
                    )
                  )
                );
              }}
            >
              CONFIRM
            </button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Clinder;
