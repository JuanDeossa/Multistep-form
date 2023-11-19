/* eslint-disable react/prop-types */
import { IconArrowRight } from "@tabler/icons-react";

export const NextButton = ({ setCurrentStep, disabled = true }) => {
  return (
    <button
      type="button"
      className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10 disabled:opacity-60"
      onClick={() => setCurrentStep((prev) => prev + 1)}
      disabled={disabled}
    >
      <IconArrowRight />
    </button>
  );
};
