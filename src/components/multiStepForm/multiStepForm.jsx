import { useForm } from "react-hook-form";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import classes from "./multiStepForm.module.css";
import { useState } from "react";
import { StepIndicator } from "../stepIndicator/stepIndicator";
import { DevTool } from "@hookform/devtools";

let renderCounter = 0;
export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validStep1, setValidStep1] = useState(null);
  const [validStep2, setValidStep2] = useState(null);
  const [validStep3, setValidStep3] = useState(null);
  const {
    handleSubmit,
    register,
    trigger,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "Ass",
      lastName: "A",
      email: "Juan@gmail.com",
      password: "",
      phone: "321",
      address: "",
      // name: "Juan",
      // lastName: "Deossa",
      // email: "Juan@gmail.com",
      // password: "",
      // phone: "3214408902",
      // address: "Cra52A#99Sur-90",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => console.log(data);

  renderCounter++;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="MultiStepForm bg-gray-50 p-6 min-h-[40vh] min-w-[400px] rounded-md shadow-sm shadow-slate-200 flex flex-col gap-2 items-center"
    >
      <h1># of renders: {renderCounter / 2}</h1>
      <StepIndicator currentStep={currentStep} />
      {/*PRUEBAS*/}
      {currentStep === 1 && (
        <Step1
          classes={classes}
          register={register}
          errors={errors}
          setCurrentStep={setCurrentStep}
          trigger={trigger}
          watch={watch}
          currentStep={currentStep}
          validStep={validStep1}
          setValidStep={setValidStep1}
        />
      )}
      {currentStep === 2 && (
        <Step2
          classes={classes}
          register={register}
          errors={errors}
          setCurrentStep={setCurrentStep}
          trigger={trigger}
          watch={watch}
          currentStep={currentStep}
          validStep={validStep2}
          setValidStep={setValidStep2}
        />
      )}
      {currentStep === 3 && (
        <Step3
          watch={watch}
          classes={classes}
          register={register}
          errors={errors}
          setCurrentStep={setCurrentStep}
          trigger={trigger}
          validStep={validStep3}
          setValidStep={setValidStep3}
          isValid={isValid}
        />
      )}
      <div className={classes.dev}>
        <DevTool control={control} />
      </div>
    </form>
  );
};
