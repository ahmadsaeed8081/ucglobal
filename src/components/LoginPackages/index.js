import React, { useState } from "react";

import { ArrowBackIcon } from "../../icons";

const LoginPackages = ({
  setOpenLoginPackages,
  setMemeberType,
  setOpenUserType,
}) => {
  const [activeTab, setActiveTab] = useState("Basic");
  const TabsList = [
    { lbl: "Basic" },
    { lbl: "Premium" },
    { lbl: "Premium Plus" },
  ];
  return (
    <div className="login-package-sec flex flex-col ">
      <div className="page-hdr flex items-center w-full justify-center">
        <div className="back-icon flex items-start justify-center">
          <div
            className="icon flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              setOpenLoginPackages(false);
              setOpenUserType(true);
            }}
          >
            <ArrowBackIcon />
          </div>
        </div>
        <div className="sec-tag flex-1 items-center justify-center text-center">
          CHOOSE YOUR <span className="text-themeColor">PLAN </span> TO{" "}
          <span className="text-themeColor">REGISTER</span>
        </div>
      </div>
      <div className="tabs flex items-center">
        {TabsList.map((item, index) => (
          <div
            key={index}
            className={`tab-item flex items-center justify-center ${
              activeTab === item.lbl ? "active" : ""
            }`}
            onClick={(e) => setActiveTab(item.lbl)}
          >
            <div className="lbl">{item.lbl}</div>
          </div>
        ))}
      </div>
      <div className="package_grid" id="packageslist">
        {activeTab === "Basic" ? (
          <>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Associate</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$49</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Basic</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$29</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Bronze</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$14</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
          </>
        ) : activeTab === "Premium" ? (
          <>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Silver</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$49</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Gold</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$29</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Platinum</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$14</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
          </>
        ) : activeTab === "Premium Plus" ? (
          <>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Platinum+</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$49</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Business</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$29</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Business+</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$14</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
            <div className="pack-box flex flex-col">
              <div className="pack-name">Professional</div>
              <div className="pack-center flex items-center justify-center">
                <div className="amount">$14</div>
              </div>
              <button className="btn-buy button">Buy Now</button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LoginPackages;
