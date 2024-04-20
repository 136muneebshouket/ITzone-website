"use client";
import React, { useState } from "react";
import Context from "./Context";
// import Response_modal from '@/othercomponents/Modal/Response_modal'
// import Modal_res from '@/othercomponents/Modal1/Modal_res'

const Provider = ({ children }) => {
  const [message, setMessage] = useState("User context");
  return (
    <>
      <Context.Provider value={{ message, setMessage }}>
        {children}
        {/* {message && <Modal_res res={message} onClose={()=>{setMessage()}}/>} */}
      </Context.Provider>
    </>
  );
};

export default Provider;
