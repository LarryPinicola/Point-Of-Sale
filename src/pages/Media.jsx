import React from "react";
import MediaUploader from "../components/MediaUploader";
import MediaUploaded from "../components/MediaUploaded";

const Media = () => {
  return (
    <div className="w-full flex">
      <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center">
        <h1 className="text-xl tracking-widest">sidebar</h1>
      </div>
      <div className="bg-[#202124] px-5 w-full">
        <MediaUploader />
        <MediaUploaded/>
      </div>
    </div>
  );
};

export default Media;
