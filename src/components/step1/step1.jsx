/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { NextButton } from "../nextButton/nextButton";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";

export const Step1 = () => {
  const {
    formInstance,
    currentStep,
    validStep1: validStep,
    setValidStep1: setValidStep,
    classes,
  } = useSignUpFormContext();

  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = formInstance;

  const { name, lastName } = watch();

  const validate = async () => {
    if (validStep !== null) {
      const isValid = (await trigger("name")) && (await trigger("lastName"));
      setValidStep(isValid);
    } else {
      setValidStep(false);
    }
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, lastName, currentStep]);

  return (
    <div className="Step1 flex flex-col gap-6 mt-6 flex-grow">
      <div className={classes.textField}>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: {
              value: true,
              message: "Required field",
            },
            pattern: {
              value: /[A-Z]/,
              message: "At least 1 Uppercase",
            },
            minLength: {
              value: 2,
              message: "At least 2 characters",
            },
          })}
        />
        <span className={classes.alertField}>{errors.name?.message}</span>
      </div>
      <div className={classes.textField}>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="last name"
          {...register("lastName", {
            required: {
              value: true,
              message: "Required field",
            },
            pattern: {
              value: /[A-Z]/,
              message: "At least 1 Lowercase",
            },
            minLength: {
              value: 2,
              message: "At least 2 characters",
            },
          })}
        />
        <span className={classes.alertField}>{errors.lastName?.message}</span>
      </div>
      <div className="flex-grow flex items-end">
        <NextButton disabled={!validStep} />
      </div>
    </div>
  );
};
