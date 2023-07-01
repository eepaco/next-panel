import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionContent = React.forwardRef(function x(
  {
    children,
    className,
    ...props
  }: {
    className?: string;
    children?: ReactNode;
    props?: any;
  },
  forwardedRef: any
) {
  return (
    <Accordion.Content
      className={`bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <div className="">{children}</div>
    </Accordion.Content>
  );
});

export default AccordionContent;
