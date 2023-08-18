import React from "react";

const ProductsPics = ({ pd }) => {
  return (
    <div className="rounded-lg border border-gray-600">
      <img
        src={pd.url}
        alt=""
        className="w-full h-[70%] object-cover mx-auto rounded-t-lg"
      />
      <div className="text-end p-2">
        <h1 className="text-lg tracking-wide">{pd.item}</h1>
        <p className="">{pd.value} ကျပ်</p>
      </div>
    </div>
  );
};

export default ProductsPics;
