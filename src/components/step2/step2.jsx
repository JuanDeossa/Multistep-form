/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { BackButton } from "../backButton/backButton";
import { NextButton } from "../nextButton/nextButton";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";
import { PasswordValidationsAlert } from "../passwordValidationsAlert/passwordValidationsAlert";
import { CSSTransition } from "react-transition-group";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import "./step2.css";

const INITIAL_VALIDATIONS = [
  {
    id: "upper",
    regex: /[A-Z]/,
    message: "At least 1 upper character A-Z",
    valid: false,
  },
  {
    id: "lower",
    regex: /[a-z]/,
    message: "At least 1 lower character a-z",
    valid: false,
  },
  {
    id: "number",
    regex: /[0-9]/,
    message: "At least 1 number 0-9",
    valid: false,
  },
  {
    id: "minLength",
    regex: /^.{6,}$/,
    message: "6 characters min",
    valid: false,
  },
  {
    id: "special",
    regex: /[!@#%^&*_]/,
    message: "At least 1 special character",
    valid: false,
  },
];

export const Step2 = () => {
  const nodeRef = useRef(null);

  const [showPasswordValidations, setShowPasswordValidations] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState(INITIAL_VALIDATIONS);

  const handlePasswordVisibility = () => setShowPassword((prev) => !prev);

  const {
    formInstance,
    currentStep,
    validStep2: validStep,
    setValidStep2: setValidStep,
    classes,
  } = useSignUpFormContext();

  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = formInstance;

  const { email, password } = watch();

  const handlePasswordValidation = () => {
    setValidations([
      ...validations.map((validation) => ({
        ...validation,
        valid: validation.regex.test(password),
      })),
    ]);
  };
  const validate = async () => {
    if (validStep !== null) {
      const isValid = (await trigger("email")) && (await trigger("password"));
      setValidStep(isValid);
    } else {
      setValidStep(false);
    }
    handlePasswordValidation();
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, currentStep]);

  return (
    <div className="Step2 flex flex-col flex-grow">
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
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={showPassword ? "" : "*******"}
            onFocus={() => setShowPasswordValidations(true)}
            className="w-full "
            {...register("password", {
              required: {
                value: true,
                message: "password required",
              },
            })}
            // onChange={handlePasswordValidation}
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer">
            {showPassword ? (
              <EyeIcon
                width={20}
                height={20}
                color="#686767"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <EyeSlashIcon
                width={20}
                height={20}
                color="#686767"
                onClick={handlePasswordVisibility}
              />
            )}
          </span>
        </div>
        <span className={classes.alertField}>{errors.password?.message}</span>
      </div>
      <CSSTransition
        in={showPasswordValidations}
        nodeRef={nodeRef}
        timeout={5000}
        classNames="alert"
        unmountOnExit
      >
        <div ref={nodeRef} className="mt-2">
          <PasswordValidationsAlert validations={validations} />
        </div>
      </CSSTransition>
      <div className="flex gap-4 items-end flex-grow">
        <BackButton disabled={false} />
        <NextButton
          disabled={!validStep || !validations.every((val) => !!val.valid)}
        />
      </div>
    </div>
  );
};
