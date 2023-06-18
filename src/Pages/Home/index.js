import React, { useState } from "react";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";
import Wrapper from "../../routes/Wrapper";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  CheckIcon,
  CopyIcon,
  CrownIcon,
} from "../../icons";
import SearchBox from "../../components/SearchBox";
import PaymentWithDraw from "../../components/PaymentWithDraw";
import VerificationPopup from "../../components/VerificationPopup";
import Packages from "../../components/Packages";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [openVerify, setOpenVerify] = useState(false);
  const [openPackages, setOpenPackages] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e) => {
    console.log("what is e", e);
    navigator.clipboard.writeText(e);

    setShowMessage(true);
    setIsButtonDisabled(true);

    // Enable the button after 3 seconds
    setTimeout(() => {
      setIsButtonDisabled(false);
      setShowMessage(false);
    }, 3000);
  };

  return (
    <Wrapper>
      <div className="lading-page flex flex-col">
        <div className="_bg_vector w-full">
          <div className="top-vector"></div>
          <div className="btm-vector"></div>
        </div>
        <div className="page-body">
          <div className="wrap wrapWidth flex flex-col">
            <div className="page-hdr flex items-center w-full justify-between">
              <div className="sec-tag">Dashboard</div>
              <div className="action flex items-center justify-center">
                <button
                  className="btn-plan button"
                  onClick={(e) => setOpenPackages(true)}
                >
                  <div className="btn-icon">
                    <CrownIcon />
                  </div>
                  <div className="btn-lbl">Upgrade Your Plan</div>
                </button>
              </div>
              {/* <SearchBox /> */}
            </div>
            <div className="reports-grid">
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon1 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Total Earning</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon2 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Total Referrals</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon3 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Total Withdraw</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-start justify-between">
                  <div className="icon">
                    <Icon4 />
                  </div>
                  <button className="btn button" onClick={(e) => setOpen(true)}>
                    Withdraw
                  </button>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Pending Balance</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon5 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Upliner ID: #8192830</div>
                  <div className="flex items-center">
                    <div className="amount">Jacklin Smith</div>
                    <div className="icon-check flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon6 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Total Investment</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon7 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Right Side Earring</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
              <div className="grid-box flex flex-col">
                <div className="box-top flex items-center">
                  <div className="icon">
                    <Icon8 />
                  </div>
                </div>
                <div className="box-btm flex flex-col">
                  <div className="box-lbl">Left Side Earring</div>
                  <div className="amount">$9,082.00</div>
                </div>
              </div>
            </div>
            <div className="copy-referral-link-sec">
              <div className="link-box flex items-center">
                <div className="link-left flex items-center">
                  <div className="link-lbl">Referral Link:</div>
                  <div className="link-code">jQiWdu0239R13B4</div>
                </div>
                <div className="link-right items-center">
                  <button
                    className="copy-btn cleanbtn flex items-center justify-center"
                    onClick={(e) => handleClick("jQiWdu0239R13B4")}
                    disabled={isButtonDisabled}
                  >
                    {showMessage ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="package-sec flex flex-col ">
              <div className="page-hdr flex items-center w-full justify-between">
                <div className="sec-tag">Packages</div>
                <div className=""></div>
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
            </div> */}
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <PaymentWithDraw setOpen={setOpen} setOpenVerify={setOpenVerify} />
        </Modal>
        <Modal open={openVerify} onClose={() => setOpenVerify(false)}>
          <VerificationPopup setOpenVerify={setOpenVerify} />
        </Modal>
        <Modal open={openPackages} onClose={() => setOpenPackages(false)}>
          <Packages setOpenPackages={setOpenPackages} />
        </Modal>
      </div>
    </Wrapper>
  );
};

export default Main;
