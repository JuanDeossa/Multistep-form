/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { BackButton } from "../backButton/backButton";
import { NextButton } from "../nextButton/nextButton";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";
import { PasswordValidationsAlert } from "../passwordValidationsAlert/passwordValidationsAlert";

export const Step2 = ({
  classes,
  // formInstance,
  // currentStep,
  // setCurrentStep,
  // validStep,
  // setValidStep,
}) => {

  const {
    formInstance,
    currentStep,
    validStep2: validStep,
    setValidStep2: setValidStep,
  } = useSignUpFormContext();

  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = formInstance;

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
        <PasswordValidationsAlert/>
      </div>
      <div className="flex gap-4">
        <BackButton disabled={false} />
        <NextButton disabled={!validStep} />
      </div>
    </div>
  );
};
