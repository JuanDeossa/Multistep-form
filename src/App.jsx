import { SignUpMsForm } from "./components/signUpMsForm/signUpMsForm";
import { SignUpFormContextProvider } from "./context/signUpFormContext";


export const App = () => {
  return (
    <div className="App App min-h-screen bg-slate-500 grid place-content-center">
      <SignUpFormContextProvider>
        <SignUpMsForm />
      </SignUpFormContextProvider>
    </div>
  );
};
