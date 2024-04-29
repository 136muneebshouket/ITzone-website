"use client";
import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [message, setMessage] = useState("User context");
  return (
    <>
      <Context.Provider value={{ message, setMessage }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
