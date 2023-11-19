/* eslint-disable react/prop-types */
import { IconArrowRight } from "@tabler/icons-react";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";

export const NextButton = ({ disabled = true }) => {
  const { setCurrentStep } = useSignUpFormContext();
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
