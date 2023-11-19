import { useContext } from "react";
import { SignUpFormContext } from "../context/signUpFormContext";


const MESSAGE =
  "useSignUpFormContext must be used within a SignUpFormContextProvider";

export const useSignUpFormContext = () => {
  const context = useContext(SignUpFormContext);
  if (!context) {
    alert(MESSAGE);
    throw new Error(MESSAGE);
  }
  return context;
};
