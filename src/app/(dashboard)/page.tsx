"use client";

import Module from "@/components/Module/Module";
import ModuleWrapper from "@/components/Module/ModuleWrapper";

export default function Home() {
  return (
    <ModuleWrapper>
      <Module title="Overview">
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
        <div className="flex items-center text-sm my-4">
          <span className="text-gray-400 min-w-[4rem]">Title</span>
          <span className="text-gray-600">Some Information</span>
        </div>
      </Module>
      <Module title="Module Heading">children here</Module>
      <Module title="Module Heading">children here</Module>
    </ModuleWrapper>
  );
}
