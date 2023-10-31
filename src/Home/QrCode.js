import React from "react";
import "./HomeCss/QrCode.css";
const QrCode = () => {
  return (
    <>
      <div className="container rizwan-box">
        <div className="row d-flex text-center align-items-center justify-content-center ">
          <div className="col-lg-4 col-md-4 my-2">
            <img className="img-fluid" src="..\assets\callToAction2.png" alt="no_image_QRcode" />
          </div>
          <div className="col-lg-4 col-md-4 my-2">
            <img className="img-fluid" src="..\assets\MObile.PNG" alt="no_image_QRcode" />
          </div>
          <div className="col-lg-4 col-md-4 my-2">
            <img className="img-fluid" src="..\assets\frame.png" alt="no_image_QRcode" />
          </div>
        </div>
      </div>
    </>
  );
};
export default QrCode;
