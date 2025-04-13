import { createPortal } from "react-dom";

export default function Modal() {
  return createPortal(
    <dialog>Test text</dialog>,
    document.getElementById("modal")
  );
}
