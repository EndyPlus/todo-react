import { createPortal } from "react-dom";

export default function Modal({ children, ref, onClose }) {
  return createPortal(
    <dialog ref={ref} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
