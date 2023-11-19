/* eslint-disable react/prop-types */
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const BackButton = ({ disabled = true }) => {
  const { setCurrentStep } = useSignUpFormContext();
  return (
    <button
      type="button"
      className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10 disabled:opacity-60"
      onClick={() => setCurrentStep((prev) => prev - 1)}
      disabled={disabled}
    >
      <ArrowLeftIcon  width={20} height={20}/>
    </button>
  );
};
