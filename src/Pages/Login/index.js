import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setUserToken } from "../../store/reducers/globalReducer";

import Modal from "../../components/Modal";
import ConnectWallet from "../../components/ConnectWallet";
import LoginPackages from "../../components/LoginPackages";
import UserTypePopup from "../../components/UserTypePopup";
import UserType from "../../components/UserTypePopup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openLoginPackages, setOpenLoginPackages] = useState(false);
  const [openUserType, setOpenUserType] = useState(false);
  const [memberType, setMemeberType] = useState(null);

  const userLogin = () => {
    localStorage.setItem("userToken", true);
    dispatch(setUserToken(true));
    navigate("/dashboard/home");
  };

  // useEffect(() => {
  //   if (memberType !== null) {
  //     setOpenLoginPackages(true);
  //     setOpenUserType(false);
  //   }
  // }, [memberType]);

  return (
    <div className="login-page flex">
      <div className="_bg_vector w-full">
        <div className="top-vector"></div>
        <div className="wrap wrapWidth flex  flex-col">
          <div className="page-hdr flex items-center w-full justify-end">
            <button
              className="btn-connect button"
              onClick={(e) => setOpen(true)}
            >
              Connect Wallet
            </button>
          </div>
          <div className="main-box flex items-center justify-center h-full w-full">
            <div className="left-side flex">
              <div className="logo flex items-center justify-center">
                <img src="/images/logo.png" className="img" />
              </div>
            </div>
            <div className="right-side flex">
              <div className="form-box flex flex-col">
                <div className="sec-tag">For Login</div>
                <div className="login-vector">
                  <img src="/images/loginVector.svg" className="vector-img" />
                </div>
                <div className="login-form flex flex-col items-center">
                  <button className="button btn-login" onClick={userLogin}>
                    Login
                  </button>
                  <div
                    className="have-account"
                    onClick={(e) => setOpenUserType(true)}
                  >
                    Don’t have an Account?{" "}
                    <span className="text-themeColor">Register</span>
                  </div>
                </div>
                {/* <div className="i-field flex flex-col mb-14">
                <input
                  type="text"
                  placeholder="Enter Account ID"
                  className="txt cleanbtn"
                />
                <div className="action row2">
                  <button className="btn button">View</button>
                  <button className="btn button" onClick={userLogin}>
                    Login
                  </button>
                </div>
              </div>
              <div className="sec-tag">For Registration</div>
              <div className="i-field flex flex-col">
                <input
                  type="text"
                  placeholder="Register With Us"
                  className="txt cleanbtn"
                />
                <div className="action row2">
                  <button className="btn button" onClick={(e) => setOpen(true)}>
                    Register
                  </button>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="btm-vector"></div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ConnectWallet setOpen={setOpen} />
      </Modal>
      <Modal open={openUserType} onClose={() => setOpenUserType(false)}>
        <UserType
          setMemeberType={setMemeberType}
          setOpenUserType={setOpenUserType}
          setOpenLoginPackages={setOpenLoginPackages}
        />
      </Modal>
      <Modal
        open={openLoginPackages}
        onClose={() => setOpenLoginPackages(false)}
      >
        <LoginPackages
          setOpenLoginPackages={setOpenLoginPackages}
          setMemeberType={setMemeberType}
          setOpenUserType={setOpenUserType}
        />
      </Modal>
    </div>
  );
};

export default Login;
