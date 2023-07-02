"use client";

import React, { useContext, useState } from "react";

type TogglerContextType = {
  snackbar: {
    state: boolean;
    message: string;
  };
  setSnackbar: React.Dispatch<
    React.SetStateAction<{
      state: boolean;
      message: string;
    }>
  >;
  bookingDetail: boolean;
  setBookingDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  snackbar: { state: false, message: "" },
  setSnackbar: () => {},
  bookingDetail: false,
  setBookingDetail: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookingDetail, setBookingDetail] = useState(false);
  const [snackbar, setSnackbar] = useState({
    state: false,
    message: "",
  });

  return (
    <TogglerContext.Provider
      value={{
        snackbar,
        setSnackbar,
        bookingDetail,
        setBookingDetail,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
