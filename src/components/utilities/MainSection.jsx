import bg_right_intro_desktop from "../../../public/bg-pattern-intro-right-desktop.svg";

export const MainSection = ({ textTitle, children }) => {
  return (
    <section className="my-20 px-6 lg:px-28 relative mt-[128px]">
      <img
        src={bg_right_intro_desktop}
        alt="background pattern"
        className="absolute w-56 top-0 right-0"
      />

      <h2 className="text-5xl text-dark-violet font-headings mb-10 text-center w-full flex flex-col items-center lg:items-start">
        <span className="h-px w-36 bg-dark-violet mb-10 block"></span>
        {textTitle}
      </h2>

      {children}
    </section>
  );
};
