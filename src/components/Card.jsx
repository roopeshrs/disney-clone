import React from "react";

function Card({image}) {
  return (
    <div className="w-[180px] h-[90px] rounded-md border-[2px] border-[#64748b] cursor-pointer sm:mb-[15px] sm:w-[50%]">
        <img src={image} className="w-full h-full object-cover"/>
    </div>
  );
}

export default Card;
