import { DependencyList, useEffect } from "react";

export default function useHandleResizeTransition(
  elRef: HTMLElement | undefined | null,
  deps: DependencyList
) {
  console.log("desp", deps);

  useEffect(() => {
    elRef?.classList.add("duration-300");

    const ref = setTimeout(() => {
      elRef?.classList.remove("duration-300");
    }, 300);

    return () => {
      clearTimeout(ref);
    };
  }, deps);
}
