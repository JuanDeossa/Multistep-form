import { Step1 } from "../step1/step1"
import { Step2 } from "../step2/step2"
import { Step3 } from "../step3/step3"


export const MultiStepForm = () => {
  return (
    <form
      className="MultiStepForm"
    >
      <Step1/>
      <Step2/>
      <Step3/>
    </form>
  )
}