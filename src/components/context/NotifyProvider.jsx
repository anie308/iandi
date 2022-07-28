import React, { createContext, useContext, useRef, useState } from "react";
import { useEffect } from "react";
const NotifyContext = createContext();

let timeoutId;

export default function NotifyProvider({ children }) {
  const [notify, setNotify] = useState({
    type: "",
    value: "",
  });
  const [backgroundColor, setBackgroundColor] = useState("bg-red-400");
  const notifyRef = useRef();

  const updateNotification = (type, value) => {
    if (!type || !value) return;
    if (timeoutId)  clearTimeout(timeoutId);


    switch (type) {
      case "error":
        setBackgroundColor("bg-red-400");
        break;
      case "warning":
        setBackgroundColor("bg-orange-400");
        break;
      case "success":
        setBackgroundColor("bg-green-400");
        break;
      default:
        setBackgroundColor("bg-red-400");
    }

    setNotify({ type, value });
    timeoutId = setTimeout(() => {
      setNotify({ type: "", value: "" });
    }, 3000);
  };

  useEffect(() => {
    notifyRef.current?.classList.remove("bottom-[100px]", "opacity-0");
    notifyRef.current?.classList.add("bottom-[80px]", "opacity-1");
    // return () => {
    //   notifyRef.current?.classList.add("bottom-[100px]", "opacity-0");
    //   notifyRef.current?.classList.remove("bottom-[80px]", "opacity-1");
    // }
  }, [notify.value]);
  return (
    <>
      <NotifyContext.Provider value={{ updateNotification }}>
        {children}
      </NotifyContext.Provider>
      {notify.value ? (
        <p
          ref={notifyRef}
          className={
            backgroundColor +
            " rounded px-[25px] py-[8px] text-[20px] text-white fixed bottom-[100px] opacity-0  left-1/2 -transalte-x-1/2 transition-all duration-150 ease-linear"
          }
        >
          {notify.value}
        </p>
      ) : null}
    </>
  );
}

export const useNotification = () => useContext(NotifyContext);
