"use client"; // 确保是客户端组件

import { createContext, useContext, useState } from "react";


interface ProgressContextType {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (step: number) => void;
  setTotalSteps: (total: number) => void;
}


const ProgressContext = createContext<ProgressContextType | null>(null);


export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(19); 

  return (
    <ProgressContext.Provider value={{ currentStep, totalSteps, setCurrentStep, setTotalSteps }}>
      {children}
    </ProgressContext.Provider>
  );
};


export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
