import { useState } from "react";
import NavbarMobileHamburger from "./NavbarMobileHamburger";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden h-full flex items-center tracking-wider justify-between relative">
      <a href="/" className="h-full cursor-pointer">
        <div className="flex flex-col h-full justify-around">
          <h1 className="font-bold uppercase text-3xl leading-[2rem]">
            {"Artgal"}
          </h1>
          <p className="text-[0.5rem] leading-[0.5rem] pl-0.5">
            {"by Albert Turoń"}
          </p>
        </div>
      </a>
      {open ? (
        <div className="gap-x-6 bg-black transition-all overscroll-contain w-screen h-screen top-0 left-0 fixed z-50 flex flex-col">
          <div className="px-3 flex flex-1 flex-col">
            <div className="flex w-full h-16 justify-end items-center px-4">
              <NavbarMobileHamburger
                state={open}
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              />
            </div>
            <div className="flex flex-col flex-1 gap-y-10 items-center justify-center">
              <a className="text-xl" href="/cultures">
                {"cultures"}
              </a>
              <a className="text-xl" href="/artists">
                {"artists"}
              </a>
              {/* <a className="text-xl" href="/about">
                {"about"}
              </a> */}
            </div>
          </div>
        </div>
      ) : (
        <NavbarMobileHamburger
          state={open}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
      )}
    </div>
  );
};

export default NavbarMobile;
