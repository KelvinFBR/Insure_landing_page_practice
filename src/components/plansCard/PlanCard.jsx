import { motion } from "framer-motion";
import { useContext } from "react";
import { PlansContext } from "../../context/PlansContext";

export const PlanCard = ({ type, price, storage, userAllowance, capacity }) => {
  const { isMonthly } = useContext(PlansContext);

  return (
    <div
      className={`min-w-[300px] max-w-xs p-10 text-center rounded-xl font-body  ${
        type === "Professional"
          ? "bg-grayish-blue text-very-light-gray scale-105"
          : "bg-violet-200 text-dark-violet"
      }`}
    >
      <h2 className="text-lg font-bold">{type}</h2>
      <motion.p
        className={`font-bold text-5xl mt-6 transition-all ${
          !isMonthly ? "scale-110" : ""
        }`}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >{`$${price}`}</motion.p>
      <div>
        <p className="mt-10 py-3 text-1xl font-bold border-b-white border-solid border-y-2">
          {storage} Storage
        </p>
        <p className="py-3 text-1xl font-bold border-b-white border-solid border-b-2">
          {userAllowance} Users Allowend
        </p>
        <p className="py-3 text-1xl font-bold border-b-white border-solid border-b-2">
          Send up to {capacity}
        </p>
      </div>
      <button
        className={`box-border uppercase font-bold mt-6 py-2 w-full rounded-md transition-all hover:bg-transparent 
      ${
        type === "Professional"
          ? "bg-very-light-gray hover:border-solid hover:border-very-light-gray hover:border-2 text-dark-violet hover:text-very-light-gray"
          : "bg-grayish-blue hover:border-solid hover:border-grayish-blue hover:border-2  text-very-light-gray hover:text-dark-violet"
      }
      `}
      >
        Learn More
      </button>
    </div>
  );
};
