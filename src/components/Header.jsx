import React from "react";
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <div className="h-[10vh] bg-[#090b13] flex justify-between items-center px-[20px]">
      <div className="w-[100px] h-full p-[8px]"><img src={logo} className="w-full h-full object-contain cursor-pointer"/></div>
      <div className="p-[8px]">
        <div className="uppercase text-white border-[1px] border-[#fff] rounded-sm px-[8px] py-[6px] cursor-pointer">login</div>
      </div>
    </div>
  );
}

export default Header;
