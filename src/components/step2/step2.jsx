/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { BackButton } from "../backButton/backButton";
import { NextButton } from "../nextButton/nextButton";

export const Step2 = ({
  classes,
  register,
  currentStep,
  setCurrentStep,
  validStep,
  setValidStep,
  watch,
  trigger,
  errors,
}) => {
  const { email, password } = watch();

  const validate = async () => {
    if (validStep !== null) {
      const isValid = (await trigger("email")) && (await trigger("password"));
      setValidStep(isValid);
    } else {
      setValidStep(false);
    }
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, currentStep]);

  return (
    <div className="Step2">
      <div className={classes.textField}>
        <label>Email</label>
        <input
          type="email"
          placeholder="email@example.com"
          {...register("email", {
            required: {
              value: true,
              message: "email required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "invalid email",
            },
          })}
        />
        <span className={classes.alertField}>{errors.email?.message}</span>
      </div>
      <div className={classes.textField}>
        <label>Password</label>
        <input
          type="text"
          placeholder="******"
          {...register("password", {
            required: {
              value: true,
              message: "password required",
            },
          })}
        />
        <span className={classes.alertField}>{errors.password?.message}</span>
      </div>
      <div className="flex gap-4">
        <BackButton setCurrentStep={setCurrentStep} disabled={false} />
        <NextButton setCurrentStep={setCurrentStep} disabled={!validStep} />
      </div>
    </div>
  );
};
