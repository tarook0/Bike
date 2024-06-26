import { useEffect, useRef } from "react";

export function UseOutSideClick(handler: () => void, listenCapturing = true) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("Clicked outside");
        handler();
      }
    }

    document.addEventListener("click", handleClickOutside, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClickOutside, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
