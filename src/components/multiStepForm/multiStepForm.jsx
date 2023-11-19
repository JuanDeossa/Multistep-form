import { useForm } from "react-hook-form";
import { Step1 } from "../step1/step1";
import { Step2 } from "../step2/step2";
import { Step3 } from "../step3/step3";
import classes from "./multiStepForm.module.css";
import { useState } from "react";
import { ButtonsForm } from "../buttonsForm/buttonsForm";
import { StepIndicator } from "../stepIndicator/stepIndicator";

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      // name: "Juan",
      // lastName: "Deossa",
      // email: "Juan@gmail.com",
      // password: "",
      // phone: "3214408902",
      // address: "Cra52A#99Sur-90",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="MultiStepForm bg-gray-50 p-6 min-h-[40vh] min-w-[400px] rounded-md shadow-sm shadow-slate-200 flex flex-col gap-2 items-center"
    >
      <StepIndicator currentStep={currentStep} />
      {currentStep === 1 && <Step1 classes={classes} register={register} />}
      {currentStep === 2 && <Step2 classes={classes} register={register} />}
      {currentStep === 3 && <Step3 classes={classes} register={register} />}
      <ButtonsForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </form>
  );
};
