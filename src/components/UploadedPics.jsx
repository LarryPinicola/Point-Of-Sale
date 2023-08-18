import React from "react";

const UploadedPics = ({ pic }) => {
  return (
    <div className="">
      <img src={pic.url} alt="" className="w-44 h-44 object-cover rounded-lg" />
    </div>
  );
};

export default UploadedPics;
