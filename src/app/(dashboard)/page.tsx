"use client";

import Module from "@/components/Module/Module";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl">
        <FormattedMessage
          defaultMessage={"Simple Message"} // Fallback string if ID not found for translation
          id="home.name"
        />
      </h1>

      <div className="p-2">
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
