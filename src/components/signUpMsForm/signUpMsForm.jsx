import { useForm } from "react-hook-form";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import classes from "./signUpMsForm.module.css";
import { useState } from "react";
import { StepIndicator } from "../stepIndicator/stepIndicator";
import { DevTool } from "@hookform/devtools";


// let renderCounter = 0;
export const SignUpMsForm = () => {


  const { handleSubmit, control } = formInstance;

  const onSubmit = (data) => console.log(data);

  // renderCounter++;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="SignUpMsForm bg-gray-50 p-6 min-h-[40vh] min-w-[400px] rounded-md shadow-sm shadow-slate-200 flex flex-col gap-2 items-center"
    >
      {/* <h1># of renders: {renderCounter / 2}</h1> */}
      <StepIndicator currentStep={currentStep} />
      {/*PRUEBAS*/}
      {currentStep === 1 && (
        <Step1
          classes={classes}
          //
          formInstance={formInstance}
          //
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          validStep={validStep1}
          setValidStep={setValidStep1}
        />
      )}
      {currentStep === 2 && (
        <Step2
          classes={classes}
          //
          formInstance={formInstance}
          //
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          validStep={validStep2}
          setValidStep={setValidStep2}
        />
      )}
      {currentStep === 3 && (
        <Step3
          classes={classes}
          //
          formInstance={formInstance}
          //
          setCurrentStep={setCurrentStep}
          validStep={validStep3}
          setValidStep={setValidStep3}
        />
      )}
      <div className={classes.dev}>
        <DevTool control={control} />
      </div>
    </form>
  );
};
