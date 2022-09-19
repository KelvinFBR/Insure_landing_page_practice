export const Button = ({ btnName }) => {
  return (
    <button className="transition-all font-bold hover:text-dark-violet hover:bg-very-light-gray text-very-light-gray py-2 px-8 border-very-light-gray border-solid border-2 font-body relative z-10 uppercase">
      {btnName}
    </button>
  );
};
