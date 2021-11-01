import { useState } from 'react';

export const useStep = number => {
  const [step, setStep] = useState(number);
  const previousStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  return { step, previousStep, nextStep, setStep };
};