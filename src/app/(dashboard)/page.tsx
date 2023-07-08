"use client";

import Module from "@/components/Module/Module";

export default function Home() {
  return (
    <div>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
      </div>
    </div>
  );
}
