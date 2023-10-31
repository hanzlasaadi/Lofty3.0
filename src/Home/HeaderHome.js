import React from "react";
import "./HomeCss/HeaderHome.css";
// import SearchField from "./search";
// import "./search.css";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

const HeaderHome = ({ datePickerState, setDatePickerState }) => {
  const nav = useNavigate();
  const onDateChange = (startDate, endDate) => {
    console.log(startDate, "startDAte");
    console.log(endDate, "endDate");
  };
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
  const [showCal, setShowCal] = React.useState(false);

  const handleShowCal = () => {
    console.log("state: ", datePickerState);
    setShowCal(true);
  };
  const handleCloseCal = () => {
    setShowCal(false);
  };

  const handleKeyInput = (e) => {
    if (e.keyCode === 13) nav("/City/1");
  };

  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/images/blog/Lahore1.jpg"
              class="d-block rounded w-100 img-fluid "
              alt="CarouselImg1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/blog/Lahore3.jpg"
              class="d-block rounded w-100 img-fluid "
              alt="CarouselImg2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/blog/Lahore7.jpg"
              style={{ maxHeight: "50%" }}
              class="d-block rounded w-100 img-fluid "
              alt="CarouselImg3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="content">
        <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3 mt-3">
          <div
            className="row height d-flex flex-wrap justify-content-center align-items-center w-100"
            onFocus={handleShowCal}
          >
            <div className="w-100">
              <div className="form w-100">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search by city, hotel or neighbourhood"
                  onKeyUp={handleKeyInput}
                />
              </div>
            </div>
          </div>
          {showCal ? (
            <div className="col-sm-6 w-100 d-flex flex-nowrap justify-content-between">
              <DatePicker
                value={datePickerState}
                onChange={setDatePickerState}
                inputPlaceholder="Select a day"
                renderInput={renderCustomInput}
                colorPrimary="rgb(39, 42, 97)"
                colorPrimaryLight="rgba(39, 42, 97, 0.4)"
                shouldHighlightWeekends
              />
              {true ? (
                <i
                  className="fa fa-close align-self-center"
                  style={{ cursor: "pointer" }}
                  onClick={handleCloseCal}
                ></i>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
