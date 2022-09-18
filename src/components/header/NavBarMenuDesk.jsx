export const NavBarMenuDesk = () => {
  return (
    <div className="flex text-center items-center ">
      <ul className="flex flex-row">
        <li className="ml-3 mr-3 cursor-pointer hover:font-bold">
          how we work
        </li>
        <li className="ml-3 mr-3 cursor-pointer hover:font-bold">blog</li>
        <li className="ml-3 mr-3 cursor-pointer hover:font-bold">account</li>
      </ul>
      <button className="border border-solid px-8 py-2 uppercase ml-3 mr-3 cursor-pointer hover:bg-very-dark-violet hover:text-very-light-gray">
        view plans
      </button>
    </div>
  );
};
