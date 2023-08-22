import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackNav = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b  border-stone-200 ">
      {/* brand name */}
     <div className="container mx-auto flex justify-between items-center">
       <Link to = "/sale/cashier">
       <h1 className="flex items-center text-xl tracking-tight font-semibold">
        <IoIosArrowRoundBack/>
            Back
        </h1>

       </Link>
      {/* icons */}
     </div>
    </div>
  );
};

export default BackNav;
