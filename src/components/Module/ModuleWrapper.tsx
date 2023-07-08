import { ReactNode } from "react";

export default function ModuleWrapper(props: { children: ReactNode }) {
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {props.children}
    </div>
  );
}
