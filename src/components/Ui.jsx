import React from "react";
import rec from "../images/rec.gif";
import wave from "../images/wave.gif";

const Ui = ({ islistening, start }) => {
  return (
    <>
      <div className="image-cont">
        <h1 className="heading">Record</h1>
        {islistening ? (
          <div>
            {" "}
            <img src={wave} alt="" className="logo" />
          </div>
        ) : (
          <div>
            {" "}
            <img src={rec} alt="" className="logo" />
          </div>
        )}
        <div>
         <button onClick={start} className='btn'>Start/Stop</button>
        </div>
      </div>
    </>
  );
};

export default Ui;
