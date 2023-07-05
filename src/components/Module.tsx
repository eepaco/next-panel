import Icon from "@mdi/react";
import { mdiDotsVertical, mdiMenuDown } from "@mdi/js";
import { ReactNode } from "react";

export default function Module(props: { children: ReactNode; title: string }) {
  return (
    <div className="p-2 my-2 bg-white border border-gray-300">
      <header className="flex items-center justify-between cursor-move mb-2">
        <h3 className="text-[#919191] text-lg">{props.title}</h3>

        <button
          onClick={() => alert("open DD")}
          className="flex items-center text-[#2d2d2d] -space-x-2 cursor-pointer"
        >
          <Icon path={mdiDotsVertical} size={0.8} />
          <Icon path={mdiMenuDown} size={0.8} />
        </button>
      </header>

      <div className="min-h-[15rem] max-h-[15rem] overflow-auto cursor-pointer px-2 hover:bg-gray-100">
        {props.children}
      </div>
    </div>
  );
}
