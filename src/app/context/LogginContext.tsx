"use client"; // 确保是客户端组件

import { createContext, useContext, useEffect, useState } from "react";

// 定义 Context 的类型
interface LogginContextType {
  loggin: boolean;
  setLoggin: (value: boolean) => void;
}

// 创建 Context
const LogginContext = createContext<LogginContextType | null>(null);

// Provider 组件
import { ReactNode } from "react";

interface LogginProviderProps {
  children: ReactNode;
}

export const LogginProvider = ({ children }: LogginProviderProps) => {
  const [loggin, setLoggin] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("loggin") === "false";
    }
    return true; // 默认值
  });

  useEffect(() => {
    localStorage.setItem("loggin", loggin.toString());
  }, [loggin]);

  return (
    <LogginContext.Provider value={{ loggin, setLoggin }}>
      {children}
    </LogginContext.Provider>
  );
};

// 自定义 Hook
export const useLoggin = () => {
  const context = useContext(LogginContext);
  if (!context) {
    throw new Error("useLoggin must be used within a LogginProvider");
  }
  return context;
};
