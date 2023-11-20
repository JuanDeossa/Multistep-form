/* eslint-disable react/prop-types */
// MyContext.js
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import classes from './signUpFormContext.module.css'


const defaultValues = {
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
};

export const SignUpFormContext = createContext(null);

export const SignUpFormContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validStep1, setValidStep1] = useState(null);
  const [validStep2, setValidStep2] = useState(null);
  const [validStep3, setValidStep3] = useState(null);
  const formInstance = useForm({ defaultValues });

  return (
    <SignUpFormContext.Provider
      value={{
        classes,
        formInstance,
        currentStep,
        validStep1,
        validStep2,
        validStep3,
        setCurrentStep,
        setValidStep1,
        setValidStep2,
        setValidStep3,
      }}
    >
      {children}
    </SignUpFormContext.Provider>
  );
};
