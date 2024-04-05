import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className=" bg-gray-100 p-10 rounded-lg shadow-2xl"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
