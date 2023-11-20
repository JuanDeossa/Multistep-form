import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import { StepIndicator } from "../stepIndicator/stepIndicator";
import { DevTool } from "@hookform/devtools";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";

export const SignUpMsForm = () => {
  const {
    formInstance: { handleSubmit, control },
    currentStep,
    classes,
  } = useSignUpFormContext();

  const onSubmit = (data) => {
    // console.log(data)
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="SignUpMsForm bg-gray-50 p-6 min-h-[50vh] min-w-[300px] rounded-md shadow-sm shadow-slate-200 flex flex-col gap-2 items-center"
    >
      <StepIndicator />
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {/* Developer Tool For RHF */}
      {!true && (
        <div className={classes?.dev}>
          <DevTool control={control} />
        </div>
      )}
      {/* Developer Tool For RHF */}
    </form>
  );
};
