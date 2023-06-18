import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const PaymentWithDraw = ({ setOpen, setOpenVerify }) => {
  const ENDTIME = 1685012370000;
  const countdownrender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <>00 Days 00 Hours 00 Min 00 Sec</>;
    } else {
      // Render a countdown
      return (
        <>
          {zeroPad(days, 2)} Days {zeroPad(hours, 2)} Hours{" "}
          {zeroPad(minutes, 2)} Min {zeroPad(seconds, 2)} Sec
        </>
      );
    }
  };

  return (
    <div className="payment-withdraw-popup flex">
      <div className="withdraw-popup-wrapper flex flex-col">
        <div className="popup-hdr flex items-center">Payment Withdraw</div>
        <div className="form-block flex flex-col">
          <div className="input-field flex flex-col">
            <div className="lbl">My Balance</div>
            <input type="text" placeholder="$000.00" className="txt cleanbtn" />
          </div>
          <div className="input-field flex flex-col">
            <div className="lbl">Amount (min $10 - Max $50)</div>
            <input
              type="text"
              placeholder="Enter Amount"
              className="txt cleanbtn"
            />
          </div>
          <div className="input-field flex flex-col">
            <div className="lbl"> You can Withdraw after:</div>
            <Countdown
              key={Math.floor(Math.random() * 10 + 1)}
              date={ENDTIME}
              renderer={countdownrender}
            />
          </div>
          <div className="action flex flex-col items-start">
            <button
              className="btn button"
              onClick={(e) => {
                setOpen(false);
                setOpenVerify(true);
              }}
            >
              Withdraw Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWithDraw;
