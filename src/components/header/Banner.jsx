import { ImgIntro } from "./ImgIntro";
import { BgMobileIntro } from "./BgMobileIntro";
import { Button } from "./Button";

export const Banner = () => {
  return (
    <div className="relative flex flex-col  bg-dark-violet">
      <ImgIntro />

      <div className="relative xl:w-full mb-24">
        <div className="lg:ml-28 lg:w-[400px] text-center lg:text-left">
          <h2 className="text-5xl text-very-light-gray font-headings mt-24 relative z-10">
            <span className="h-px w-60 lg:w-40 bg-very-light-gray mb-10 hidden lg:block"></span>
            Humanizing your insureance.
          </h2>
          <p className="text-very-light-gray font-body px-3 lg:p-0 mt-6 mb-8 relative z-10">
            Get your life insurance coverage easier and faster. We blend our
            expertise and tecnnology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button btnName="view plans" />
        </div>

        <BgMobileIntro />
      </div>
    </div>
  );
};
