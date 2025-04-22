import { createPortal } from "react-dom";

export default function Modal({ ref, children }) {
  return createPortal(
    <dialog ref={ref} onClose={() => ref.current.close()}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
