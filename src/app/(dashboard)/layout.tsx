"use client";

import React, { useState, ReactElement, useRef } from "react";
import Navbar from "@/components/Layouts/DashboardLayout/Navbar";
import Sidebar from "@/components/Layouts/DashboardLayout/Sidebar/Sidebar";
import useHandleResizeTransition from "@/hooks/useHandleResizeTransition";

export default function DashboardLayout(props: {
  children: ReactElement | ReactElement[];
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarHoverDisabled, setIsSidebarHoverDisabled] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useHandleResizeTransition(contentRef.current, [isSidebarOpen]);

  const toggleClick = () => {
    if (isSidebarOpen) {
      setIsSidebarHoverDisabled(false);
    } else {
      setIsSidebarHoverDisabled(true);
    }

    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleClick={toggleClick} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarHoverDisabled={isSidebarHoverDisabled}
      />
      <div className={`flex justify-end w-full`}>
        <div
          className={`w-full mt-[2.6rem] ease-in ${
            isSidebarOpen && isSidebarHoverDisabled
              ? `md:w-[calc(100%-16.0rem)]`
              : `md:w-[calc(100%-3.0rem)]`
          }`}
          ref={contentRef}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
