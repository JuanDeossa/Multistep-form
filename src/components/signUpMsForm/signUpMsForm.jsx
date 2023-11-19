import classes from "./signUpMsForm.module.css";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import { StepIndicator } from "../stepIndicator/stepIndicator";
import { DevTool } from "@hookform/devtools";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";

// let renderCounter = 0;
export const SignUpMsForm = () => {
  const {
    formInstance: { handleSubmit, control },
    currentStep,
  } = useSignUpFormContext();

  const onSubmit = (data) => console.log(data);

  // renderCounter++;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="SignUpMsForm bg-gray-50 p-6 min-h-[40vh] min-w-[400px] rounded-md shadow-sm shadow-slate-200 flex flex-col gap-2 items-center"
    >
      {/* <h1># of renders: {renderCounter / 2}</h1> */}
      <StepIndicator />
      {/*PRUEBAS*/}
      {currentStep === 1 && <Step1 classes={classes} />}
      {currentStep === 2 && <Step2 classes={classes} />}
      {currentStep === 3 && <Step3 classes={classes} />}
      <div className={classes.dev}>
        <DevTool control={control} />
      </div>
    </form>
  );
};
