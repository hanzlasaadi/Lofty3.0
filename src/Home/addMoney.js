import React from "react";
import "./HomeCss/addMoney.css";
import NavBar from "../nav-bar/NavBar";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const AddMoney = ({ isLoggedIn, setIsLoggedIn, authToken }) => {
  const { refNumber, bankCode, key } = useParams();
  const [copied, setCopied] = React.useState(false);
  const cusId = localStorage.getItem("customerId");

  console.log(refNumber, "ref");

  const handleVerify = () => {
    // console.log(bankCode);
    // console.log(key);
    const obj = {
      ReferenceNumber: Number(refNumber),
      X_API_KEY: key,
      BankAccountCode: Number(bankCode),
      CustomerID: Number(cusId),
    };
    axios
      .post(`${apiUrl}/api/Customer/CheckStatusPaidorNot`, obj)
      .then((res) => {
        if (res.data.result === "error")
          throw new Error("Could'nt Verify your payment!");
        alert("Successfully Verified your Payment!");
      })
      .catch((err) => {
        console.log("errorVerifyingData: ", err);
        alert(
          "We could'nt verify your payment, please try again in the Mobile App!"
        );
      });
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h2
        className="text-white rounded pt-3 pb-3"
        style={{ backgroundColor: "#272a61" }}
      >
        PAY AND VERIFY
      </h2>
      <div className="d-flex justify-content-center align-items-center rounde">
        <img
          src="https://images.crunchbase.com/image/upload/c_lpad,h_100,w_100,f_auto,q_auto:eco,dpr_1/r8wo5frwbkcbyrkiumt6"
          alt="img"
        />
      </div>

      <div className="content-center">
        <p className="fs-4">
          Voucher code: <span>{refNumber}</span>
        </p>
      </div>

      <div className="error-k text-center mt-4">
        {/* <a
          href
          type="button"
          className="btn btn-primary btn-lg"
          onClick={async (e) => {
            e.preventDefault();
            try {
              // await navigator.clipboard.writeText(`${refNumber}`);
              navigator.clipboard.writeText(this.state.refNum);
              // setCopied(true);
            } catch (error) {
              // setCopied(false);
              console.log(error, "error copying refNum");
            }
          }}
        >
          {copied ? "Copied" : "Copy code"}
        </a> */}
        <CopyToClipboard text={refNumber} onCopy={() => setCopied(true)}>
          <a href type="button" className="btn btn-primary btn-lg">
            {copied ? "Copied!" : "Copy code"}
          </a>
        </CopyToClipboard>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 ">
        <p className="fs-4" style={{ textAlign: "center" }}>
          copy above code and pay through any of
          <br />
          following banks, and verify
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center rounde mt-5">
        <img
          className="w-25 h-25vh"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNtd8LtdeiqG7orv-1qqqpFgOpko7uDUU7YtXYBjpTZVjHFW694bfqgHOgRe2SBgV9yw&usqp=CAU"
          alt="anImg"
        />
      </div>

      <div className="error-k text-center mt-4 W-75">
        <a
          href
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleVerify}
        >
          VERIFY
        </a>
      </div>
    </>
  );
};
export default AddMoney;
