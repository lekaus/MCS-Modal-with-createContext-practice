import React, { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modalShown, toggleModal] = useState(false);

  const handleToggleClick = () => {
    toggleModal(!modalShown);
  };

  return (
    <ModalContext.Provider value={{ modalShown, handleToggleClick }}>
      {props.children}
    </ModalContext.Provider>
  );
};
