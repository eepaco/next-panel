import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionItem = React.forwardRef(function x(
  {
    children,
    className,
    value,
    showTitle,
    ...props
  }: {
    className?: any;
    children?: any;
    value: string;
    showTitle?: any;
    props?: any;
  },
  forwardedRef: any
) {
  return (
    <Accordion.Item
      className={`
          focus-within:shadow-black overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]
          ${className}
        `}
      value={value}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  );
});

export default AccordionItem;
