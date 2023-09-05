import React from "react";
import "../style/glassmorphic.css";

const ProductsPics = ({ pd }) => {
  return (
    <div className="rounded-lg bc bg-[#ff00f219] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer">
      <img
        src={pd.url}
        alt=""
        className="w-full h-[70%] object-cover mx-auto rounded-t-lg"
      />
      <div className="text-end p-2 text-white blFt font-bold">
        <h1 className="text-lg tracking-wide">{pd.item}</h1>
        <p className="">{pd.value} ကျပ်</p>
      </div>
    </div>
  );
};

export default ProductsPics;
