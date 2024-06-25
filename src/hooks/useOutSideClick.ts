/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export function UseOutSideClick(handler: unknown, listenCapturing = true ) {
  const ref = useRef();
  useEffect(() => {
    function handelClick(e: { target: any; }) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("Click out side ");
        handler();
      }
    }
    document.addEventListener("click", handelClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handelClick, listenCapturing);
  }, [handler, listenCapturing]);
  return ref;
}
