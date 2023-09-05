import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import "../style/glassmorphic.css";

const MediaUploader = () => {
  return (
    <div className="my-7">
      {/* title */}
      <div className="text-white mb-5">
        <h1 className="text-2xl tracking-wide">Media</h1>
        <p className="text-gray-400 text-sm">Media / Uploader</p>
      </div>
      {/* upload space */}
      <div className="bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer p-12 flex flex-col gap-5 items-center rounded-lg border border-gray-600 bc">
        <div className="">
          <div className="text-blue-400">
            <FiUploadCloud className="outline-dashed p-4 text-7xl rounded-full" />
          </div>
        </div>
        <div className="">
          <h1 className="tracking-wide">
            <span className="underline text-blue-700 text-xl">Browse</span> or
            Drag an Image
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MediaUploader;
