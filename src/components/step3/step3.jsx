/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { BackButton } from "../backButton/backButton";
import { SubmitButton } from "../submitButton/submitButton";
import { useSignUpFormContext } from "../../hooks/useSignUpFormContext";

export const Step3 = () => {
  const {
    formInstance,
    validStep3: validStep,
    setValidStep3: setValidStep,
    classes,
  } = useSignUpFormContext();

  const {
    register,
    trigger,
    watch,
    formState: { errors, isValid },
  } = formInstance;

  const { phone, address } = watch();

  const validate = async () => {
    if (validStep !== null) {
      await trigger("phone");
      await trigger("address");
    } else {
      setValidStep(false);
    }
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone, address]);

  return (
    <div className="Step3 flex flex-col gap-2 mt-6 flex-grow">
      <div className={classes.textField}>
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="321..."
          {...register("phone", {
            required: "phone required",
            minLength: {
              value: 6,
              message: "6 numbers min",
            },
          })}
        />
        <span className={classes.alertField}>{errors.phone?.message}</span>
      </div>
      <div className={classes.textField}>
        <label>Address</label>
        <input
          type="text"
          placeholder="Cra52A#99Sur-90"
          {...register("address", {
            required: "address required",
            minLength: {
              value: 5,
              message: "5 characters min",
            },
          })}
        />
        <span className={classes.alertField}>{errors.address?.message}</span>
      </div>
      <div className="flex gap-4 items-end flex-grow">
        <BackButton disabled={false} />
        <SubmitButton disabled={!isValid} />
      </div>
    </div>
  );
};
