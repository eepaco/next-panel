import React from "react";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionTrigger = React.forwardRef(function x(
  {
    children,
    className,
    icon,
    isRoot = false,
    showTitle,
    ...props
  }: {
    className?: any;
    children?: any;
    icon?: any;
    isRoot?: boolean;
    showTitle: boolean;
    props?: any;
  },
  forwardedRef: any
) {
  return (
    <Accordion.Header className="flex w-full">
      <Accordion.Trigger
        className={`text-gray-700 ${
          isRoot ? "bg-white" : "bg-gray-200"
        } hover:bg-red-200 duration-200 group flex flex-1 w-full cursor-pointer items-center justify-between pl-2 pr-1 text-[15px] leading-none
            ${className} ${!showTitle ? "py-2" : "py-[0.2rem]"}
          overflow-hidden whitespace-nowrap	text-clip`}
        {...props}
        ref={forwardedRef}
        disabled={!showTitle}
      >
        <div className="flex items-center">
          {icon && (
            <Icon
              path={icon}
              className={`text-gray-700 me-2 duration-200 ${
                !showTitle && "ms-[0.3rem]"
              }`}
              aria-hidden
              size={showTitle ? 0.8 : 0.9}
            />
          )}
          <span
            className={`duration-200 ${
              !showTitle ? "opacity-0 -ms-[2rem]" : "opacity-100 ms-0"
            }`}
          >
            {children}
          </span>
        </div>
        <Icon
          path={mdiChevronRight}
          className={`text-gray-700 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300
              group-data-[state=open]:rotate-90 ${!showTitle && "hidden"}
            `}
          aria-hidden
          size={1}
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

export default AccordionTrigger;
