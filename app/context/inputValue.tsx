"use client";

import React, { useContext, useState } from "react";

type InputValueContextType = {
  inputValue: {
    people: string;
    date: string;
    time: string;
    area: string;
  };
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      people: string;
      date: string;
      time: string;
      area: string;
    }>
  >;
};

const InputValueContext = React.createContext<InputValueContextType>({
  inputValue: {
    people: "",
    date: "",
    time: "",
    area: "",
  },
  setInputValue: () => {},
});

export const useInputValueContext = () => useContext(InputValueContext);

export const InputValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValue, setInputValue] = useState({
    people: "",
    date: "",
    time: "",
    area: "",
  });

  return (
    <InputValueContext.Provider
      value={{
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </InputValueContext.Provider>
  );
};
