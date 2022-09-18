import wave from "/bg-pattern-mobile-nav.svg";

export const NavBarMenuMobile = ({ isActive }) => {
  return (
    <div
      className={`${
        isActive
          ? "overflow-y-hidden center absolute bg-very-dark-violet text-very-light-gray text-center p-4 z-50 top-28 left-0 w-screen h-screen text-xl font-medium"
          : "hidden"
      }`}
    >
      <ul>
        <li className="m-10">how we work</li>
        <li className="m-10">blog</li>
        <li className="m-10">account</li>
      </ul>
      <button className="border border-solid px-8 py-2 uppercase ml-3 mr-3 w-11/12">
        view plans
      </button>
      <img
        src={wave}
        alt="wave"
        className="absolute bottom-0 left-0 w-screen"
      />
    </div>
  );
};
