import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import MobileSideDrawer from "./MobileSideDrawer";
const HeaderAuth = () => {
  const [width, setWidth] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleOpenSideDrawer = () => {
    setWidth(40 + "vw");
    setOpenBackdrop(true);
  };
  const handleCloseSideDrawer = () => {
    setWidth(0);
    setOpenBackdrop(false);
  };
  return (
    <>
      {openBackdrop && (
        <div className="backdrop" onClick={handleCloseSideDrawer}></div>
      )}
      <div className="flex align-center items-center ">
        <button className="outline-none bg-transparent rounded px-5 py-1 text-gray-200 border-slate-50 border-x border-y hidden xl:block">
          Login
        </button>
        <MenuIcon
          className="h-8 w-8 text-white xl:hidden md:block"
          onClick={handleOpenSideDrawer}
        />
      </div>
      <MobileSideDrawer
        width={width}
        onCloseSideDrawer={handleCloseSideDrawer}
      />
    </>
  );
};
export default HeaderAuth;
