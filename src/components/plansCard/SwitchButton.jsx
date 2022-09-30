import { motion } from "framer-motion";
import { usePlans } from "../../hooks/usePlans";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const SwitchButton = () => {
  const { plansAnnually, plansReset, isMonthly, setIsMonthly } = usePlans();

  const handleToggle = () => {
    setIsMonthly((state) => !state);
    if (isMonthly) {
      // Al dar clic al boton para cambiar a anual monthly dara true
      plansAnnually();
      return;
    }

    plansReset();
  };

  return (
    <div className="flex items-center justify-center font-body">
      <h3 className="font-bold">Annually</h3>
      <div
        className={`flex w-14 mx-4 transition-all justify-start bg-grayish-blue rounded-full hover:bg-violet-300 ${
          isMonthly ? "justify-end" : ""
        }`}
      >
        <motion.span
          onClick={handleToggle}
          className="w-6 h-6 m-1 rounded-full bg-white cursor-pointer"
          layout
          transition={spring}
        ></motion.span>
      </div>
      <h3 className="font-bold">Monthly</h3>
    </div>
  );
};
