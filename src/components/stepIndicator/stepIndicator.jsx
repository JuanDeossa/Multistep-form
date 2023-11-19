/* eslint-disable react/prop-types */
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";
const stepsArr = [
  {
    id: 1,
    label: "1",
  },
  {
    id: 2,
    label: "2",
  },
  {
    id: 3,
    label: "3",
  },
];

export const StepIndicator = ({ steps = stepsArr, currentStepFF = null }) => {
  const { currentStep: currentStepFC } = useSignUpFormContext();
  const currentStep = currentStepFF || currentStepFC;
  // console.log("currentStep: ",currentStep);
  return (
    <div className="StepIndicator w-full flex gap-3 justify-center">
      {steps.map(({ id, label }) => (
        <span
          key={id}
          className={`h-9 w-9 bg-indigo-700 rounded-full grid place-content-center text-white font-bold ${
            currentStep !== id && "opacity-60"
          }`}
        >
          {currentStep > id ? (
            <CheckIcon width={20} height={20} strokeWidth={5} />
          ) : (
            label
          )}
        </span>
      ))}
    </div>
  );
};
