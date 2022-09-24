import React from "react";

const Area = ({ note }) => {
  return (
    <>
      <div className="textarea" id="myInput">
        <p>{note}</p>
      </div>
    </>
  );
};

export default Area;
