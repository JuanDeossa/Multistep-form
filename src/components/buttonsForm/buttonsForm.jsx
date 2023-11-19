/* eslint-disable react/prop-types */
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const ButtonsForm = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="w-full flex justify-center flex-grow items-end">
      {currentStep === 1 && (
        <button
          type="button"
          className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10"
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          <IconArrowRight />
        </button>
      )}
      {currentStep === 2 && (
        <div className="w-full flex justify-center gap-6">
          <button
            type="button"
            className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            <IconArrowLeft />
          </button>
          <button
            type="button"
            className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10"
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            <IconArrowRight />
          </button>
        </div>
      )}
      {currentStep === 3 && (
        <div className="w-full flex justify-center gap-6">
          <button
            type="button"
            className="bg-indigo-500 text-white font-bold rounded-md mt-3 px-2 h-10"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            <IconArrowLeft />
          </button>
          <button
            type="submit"
            className="w-1/2 h-10 bg-indigo-500 text-white font-bold rounded-md mt-3"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
