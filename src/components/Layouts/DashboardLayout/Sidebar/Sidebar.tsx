import React, { memo, useEffect, useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Icon from "@mdi/react";
import { mdiTriangleSmallDown, mdiWallFire, mdiCog } from "@mdi/js";
import SidebarData from "@/data/SidebarData";
import useHandleResizeTransition from "@/hooks/useHandleResizeTransition";
import { useIntl } from "react-intl";
import AccordionLink from "./AccordionLink";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTrigger from "./AccordionTrigger";

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isSidebarHoverDisabled,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
  isSidebarHoverDisabled: boolean;
}) {
  const [value, setValue] = useState<string>("");
  const [subValue, setSubValue] = useState<string>("");
  const sidebarRef = useRef<HTMLElement>(null);
  const intl = useIntl();

  useHandleResizeTransition(sidebarRef.current, [isSidebarOpen]);

  const handleSidebarMouseOver = () => {
    if (!isSidebarHoverDisabled) {
      setIsSidebarOpen(true);
    }
  };

  const handleSidebarMouseLeave = () => {
    if (!isSidebarHoverDisabled) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      setValue("");
      setSubValue("");
    }
  }, [isSidebarOpen]);

  return (
    <aside
      className={`bg-[rgb(var(--sidebar-background))] fixed top-[2.6rem] md:top-[0] md:start-[0] ${
        // For <md screens
        isSidebarOpen ? "-start-[0]" : "-start-64"
        // isSidebarOpen ? "left-[--sideabr-offset]" : "-left-64"
      } ${
        isSidebarOpen ? "w-64" : "w-12"
      } h-screen ease-in z-[2] overflow-hidden`}
      onPointerMove={handleSidebarMouseOver}
      onPointerLeave={handleSidebarMouseLeave}
      ref={sidebarRef}
    >
      <button
        type="button"
        className={`bg-[rgb(var(--sidebar-header-background))] hover:bg-[rgb(var(--sidebar-header-background-hover))] 
          w-full flex items-center justify-between py-3 px-3 pl-1 
        text-gray-300 duration-200`}
        onClick={() => setValue("")}
      >
        <span className="flex items-center">
          <Icon
            path={mdiWallFire}
            size={1}
            className={`mr-1 duration-300 ${!isSidebarOpen && "ml-2"}`}
          />
          <span
            className={`whitespace-nowrap overflow-hidden text-clip duration-200 ${
              !isSidebarOpen ? "opacity-0 -ml-[2rem]" : "opacity-100 ml-0"
            }`}
          >
            Test Header
          </span>
        </span>
        <Icon
          path={mdiTriangleSmallDown}
          size={0.8}
          className={`${!isSidebarOpen && "hidden"}`}
        />
      </button>

      <Accordion.Root
        className="bg-gray-500 w-full shadow-[0_2px_10px] shadow-black/5"
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
      >
        {SidebarData(intl).map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${item.title}`}
            showTitle={isSidebarOpen}
          >
            <AccordionTrigger icon={item.icon} isRoot showTitle={isSidebarOpen}>
              {item.title}
            </AccordionTrigger>

            <AccordionContent>
              <div className="pl-3 bg-blue-400">
                {item.hasSubmenu &&
                  item.subMenuData.map((subMenu) => (
                    <Accordion.Root
                      type="single"
                      collapsible
                      key={subMenu.title}
                      value={subValue}
                      onValueChange={setSubValue}
                    >
                      {subMenu.hasSubmenu ? (
                        <AccordionItem
                          value={`subitem-${subMenu.title}`}
                          showTitle={isSidebarOpen}
                        >
                          <Accordion.Header>
                            <AccordionTrigger
                              icon={mdiCog}
                              showTitle={isSidebarOpen}
                            >
                              {subMenu.title}
                            </AccordionTrigger>
                          </Accordion.Header>
                          {subMenu.subMenuData?.map((submenu2: any) => (
                            <AccordionContent key={submenu2.title}>
                              <div className="bg-green-400 pl-3">
                                <AccordionLink href={submenu2.href}>
                                  {submenu2.title}
                                </AccordionLink>
                              </div>
                            </AccordionContent>
                          ))}
                        </AccordionItem>
                      ) : (
                        <AccordionLink href={subMenu.href}>
                          {subMenu.title}
                        </AccordionLink>
                      )}
                    </Accordion.Root>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion.Root>
    </aside>
  );
}

export default memo(Sidebar);
