const NavbarMobileHamburger = ({
  state,
  onClick,
}: {
  state: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="inline-flex flex-col items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white gap-y-1"
        aria-controls="mobile-menu"
        aria-expanded={state}
        onClick={onClick}
      >
        <div
          className={`h-1 w-8 rounded-full absolute transition-all ${
            state
              ? "transform rotate-45 bg-white absolute"
              : "bg-gray-300 relative"
          }`}
        ></div>
        <div
          className={`h-1 w-8 rounded-full absolute ${
            state ? "opacity-0 absolute" : "opacity-100 bg-gray-300 relative"
          }`}
        ></div>
        <div
          className={`h-1 w-8 rounded-full transition-all ${
            state
              ? "transform -rotate-45 bg-white absolute"
              : "bg-gray-300 relative"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default NavbarMobileHamburger;
