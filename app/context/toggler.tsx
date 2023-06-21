"use client";

import React, { useContext, useEffect, useState } from "react";

type TogglerContextType = {
  isSnackbar: boolean;
  setIsSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  bookingDetail: boolean;
  setBookingDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  isSnackbar: false,
  setIsSnackbar: () => {},
  bookingDetail: false,
  setBookingDetail: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [bookingDetail, setBookingDetail] = useState(false);

  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       setIsSnackbar(false);
  //     }, 10000);

  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [isSnackbar]);

  return (
    <TogglerContext.Provider
      value={{
        isSnackbar,
        setIsSnackbar,
        bookingDetail,
        setBookingDetail,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
