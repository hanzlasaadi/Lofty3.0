import Home from "./Home/Home";
// import Lahore from "./Cities/Lahore";
import Krachi from "./Cities/Krachi";
import Form from "./Home/Form";
import Booking from "./Home/Booking";
import Clinder from "./Home/Clinder";
// import LoginSignup from "./nav-bar/auth";
import Veiw from "./Home/Veiwdetail";
import Tab from "./Home/Tab";
import Profile from "./Home/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./Home/Favorite";
import Conformbook from "./Home/Conformbook";
import AddMoney from "./Home/addMoney";

import { useEffect, useState } from "react";
import { favDummyData } from "./assets/utils/dummyData";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Login from "./nav-bar/Login";
import Signup from "./nav-bar/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [favRooms, setFavRooms] = useState([favDummyData]);
  const [favRoomsId, setFavRoomsId] = useState([]);
  let obj = utils().getToday();
  obj.day = obj.day + 7;

  // DatePickerStates
  const [datePickerState, setDatePickerState] = useState({
    from: utils().getToday(),
    to: obj,
  });

  useEffect(() => {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      setIsLoggedIn(true);
      console.log("token is present: ", checkToken);
      setAuthToken(checkToken);
      setFavRoomsId(localStorage.getItem("favRooms")?.split(",") || []);
    } else if (
      checkToken === "" ||
      !checkToken ||
      checkToken === undefined ||
      checkToken === null
    ) {
      setIsLoggedIn(false);
      console.log("token not present: ", checkToken);
      setAuthToken(null);
    }
  }, [setIsLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              datePickerState={datePickerState}
              setDatePickerState={setDatePickerState}
              authToken={authToken}
            />
          }
        />
        <Route
          path="/City/:cityId"
          element={
            <Krachi isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="Form" element={<Form />} />
        <Route
          path="Profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
              setAuthToken={setAuthToken}
            />
          }
        />
        <Route
          path="Booking/:roomId"
          element={
            <Booking
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
              favRoomsId={favRoomsId}
            />
          }
        />
        <Route
          path="Clinder/:roomId"
          element={
            <Clinder
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              datePickerState={datePickerState}
              setDatePickerState={setDatePickerState}
            />
          }
        />
        {/* <Route
          path="login"
          element={
            <LoginSignup
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setAuthToken={setAuthToken}
            />
          }
        /> */}
        <Route
          path="Favorite"
          element={
            <Favorite
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
              favRooms={favRooms}
              setFavRooms={setFavRooms}
              setFavRoomsId={setFavRoomsId}
            />
          }
        />

        <Route
          path="Conformbook/:roomIdCusId"
          element={
            <Conformbook
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
              datePickerState={datePickerState}
            />
          }
        />
        <Route
          path="/Veiw/:partnerId"
          element={
            <Veiw isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/tab"
          element={
            <Tab
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
            />
          }
        />
        <Route
          path="/add/:refNumber/:bankCode/:key"
          element={
            <AddMoney
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              authToken={authToken}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
