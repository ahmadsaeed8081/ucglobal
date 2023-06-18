import React from "react";

const VerificationPopup = () => {
  return (
    <div className="verification-popup flex">
      <div className="verification-wrapper flex flex-col">
        <div className="popup-hdr flex items-center">Please Verify</div>
        <div className="form-block flex flex-col">
          <div className="grid_box">
            <div className="input-field flex flex-col">
              <input
                type="text"
                placeholder="First Name"
                className="txt cleanbtn"
              />
            </div>
            <div className="input-field flex flex-col">
              <input
                type="text"
                placeholder="Last Name"
                className="txt cleanbtn"
              />
            </div>
          </div>
          <div className="input-field flex flex-col">
            <input type="email" placeholder="Email" className="txt cleanbtn" />
          </div>
          <div className="input-field flex flex-col">
            <input
              type="text"
              placeholder="Phone No"
              className="txt cleanbtn"
            />
          </div>
          <div className="input-field flex flex-col">
            <input type="text" placeholder="Address" className="txt cleanbtn" />
          </div>
          <div className="grid_box">
            <div className="input-field flex flex-col">
              <input
                type="text"
                placeholder="Country"
                className="txt cleanbtn"
              />
            </div>
            <div className="input-field flex flex-col">
              <input type="text" placeholder="Age" className="txt cleanbtn" />
            </div>
          </div>
          <div className="action flex items-center">
            <button className="btn button">Submit to Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPopup;
