import React, { useContext } from "react";
import { ModalContext } from "./modalContext.js";

export const Modal = (props) => {
  const { modalShown, handleToggleClick } = useContext(ModalContext);
  return modalShown ? (
    <>
      <div className="modal-backdrop" onClick={handleToggleClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleToggleClick}>Close</button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    <button onClick={handleToggleClick}>Button</button>
  );
};
