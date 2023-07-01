import React, { useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Icon from "@mdi/react";
import {
  mdiAccountCircle,
  mdiBellOutline,
  mdiTranslate,
  mdiConsoleLine,
  mdiTriangleDown,
  mdiMagnify,
  mdiMenu,
  mdiThemeLightDark,
  mdiWhiteBalanceSunny,
  mdiMoonWaningCrescent,
  mdiLock,
  mdiLogout,
} from "@mdi/js";
import { changeLanguage } from "@/utils/changeLanguage";
import useHandleResizeTransition from "@/hooks/useHandleResizeTransition";
import { FormattedMessage } from "react-intl";
import { applyGlobalColors, changeTheme, themes } from "@/utils/changeTheme";

const Navbar = ({
  toggleClick,
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
  toggleClick: any;
}) => {
  const disableHoverEffect = (event: any) => event.preventDefault();
  const headerRef = useRef<HTMLUListElement>(null);

  useHandleResizeTransition(headerRef.current, [isSidebarOpen]);

  return (
    <NavigationMenu.Root
      className={`w-full md:w-fit fixed end-0 top-[0] z-[1]`}
    >
      <NavigationMenu.List
        className={`bg-[var(--navbar-background-color)] text-[rgb(var(--navbar-text-color))] 
          flex flex-row items-stretch justify-between ease-in w-full h-[2.6rem]
          ${
            isSidebarOpen
              ? "md:w-[calc(100vw-17.05rem)]"
              : "md:w-[calc(100vw-4.05rem)]"
          } `}
        ref={headerRef}
      >
        <div className="flex space-x-2">
          <NavigationMenu.Item
            className="hover:bg-[var(--navbar-item-background-hover)] focus:shadow-black flex items-center select-none px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
            onClick={() => toggleClick()}
          >
            <Icon path={mdiMenu} size={0.8} />
          </NavigationMenu.Item>

          <NavigationMenu.Item
            className="hover:bg-[var(--navbar-item-background-hover)] focus:shadow-black flex items-center select-none px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
            onClick={() => alert("open console")}
          >
            <Icon path={mdiMagnify} size={0.8} />
          </NavigationMenu.Item>
        </div>

        <div className="flex space-x-2">
          <NavigationMenu.Item
            className="hover:bg-[var(--navbar-item-background-hover)] hover:bg-red-500 focus:shadow-black flex items-center select-none px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
            onClick={() => alert("open console")}
          >
            <Icon path={mdiConsoleLine} size={0.8} />
          </NavigationMenu.Item>

          <NavigationMenu.Item className="flex">
            <NavigationMenu.Trigger
              className="hover:bg-[var(--navbar-item-background-hover)] focus:shadow-white flex items-center select-none gap-[4px] px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
              onPointerMove={disableHoverEffect}
              onPointerLeave={disableHoverEffect}
            >
              <Icon path={mdiTranslate} size={0.8} />{" "}
              <Icon
                path={mdiTriangleDown}
                size={0.3}
                className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <div className="sm:w-[250px] flex flex-col">
                <button
                  type="button"
                  className="hover:bg-gray-200 flex justify-center items-center p-2 text-sm text-gray-800"
                  onClick={() => changeLanguage("ltr")}
                >
                  English
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-200 flex justify-center items-center p-2 text-sm text-gray-800"
                  onClick={() => changeLanguage("rtl")}
                >
                  فارسی
                </button>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="flex">
            <NavigationMenu.Trigger
              className="hover:bg-[var(--navbar-background-color)] focus:shadow-white flex items-center select-none gap-[4px] px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
              onPointerMove={disableHoverEffect}
              onPointerLeave={disableHoverEffect}
            >
              <Icon path={mdiThemeLightDark} size={0.8} />{" "}
              <Icon
                path={mdiTriangleDown}
                size={0.3}
                className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <div className="sm:w-[250px] flex flex-col">
                <button
                  type="button"
                  className="hover:bg-gray-200 flex justify-center items-center p-2 text-sm"
                  onClick={() => changeTheme("light")}
                >
                  <div className="text-gray-800 font-medium leading-[1.2] flex items-center justify-center">
                    <Icon
                      path={mdiWhiteBalanceSunny}
                      size={0.8}
                      className="me-2"
                    />
                    <FormattedMessage
                      defaultMessage={"Light"}
                      id="header.light-theme"
                    />
                  </div>
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-200 flex justify-center items-center p-2 text-sm"
                  onClick={() => changeTheme("dark")}
                >
                  <div className="text-gray-800 font-medium leading-[1.2] flex items-center justify-center">
                    <Icon
                      path={mdiMoonWaningCrescent}
                      size={0.8}
                      className="me-2"
                    />
                    <FormattedMessage
                      defaultMessage={"Dark"}
                      id="header.dark-theme"
                    />
                  </div>
                </button>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="flex">
            <NavigationMenu.Trigger
              className="hover:bg-[var(--navbar-item-background-hover)] focus:shadow-white flex items-center select-none gap-[4px] px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
              onPointerMove={disableHoverEffect}
              onPointerLeave={disableHoverEffect}
            >
              <Icon path={mdiBellOutline} size={0.8} />{" "}
              <span className="bg-[rgb(var(--number-background-color))] w-[16px] h-[16px] flex justify-center items-center rounded-full text-xs absolute end-[0.25rem] top-[0] mt-1 me-1">
                3
              </span>
              <Icon
                path={mdiTriangleDown}
                size={0.3}
                className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <div className="sm:w-[250px] flex flex-col">
                <button className="hover:bg-gray-200 flex items-center p-2 text-sm">
                  <Icon path={mdiLock} size={0.8} className="me-1" />A Button
                  Here
                </button>
                <button className="hover:bg-gray-200 flex items-center p-2 text-sm">
                  <Icon path={mdiLogout} size={0.8} className="me-1" />
                  Another Here
                </button>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="flex">
            <NavigationMenu.Trigger
              className="hover:bg-[var(--navbar-item-background-hover)] focus:shadow-white flex items-center select-none gap-[4px] px-2 focus:shadow-[0_0_0_2px] cursor-pointer"
              onPointerMove={disableHoverEffect}
              onPointerLeave={disableHoverEffect}
            >
              <Icon path={mdiAccountCircle} size={0.8} />
              demo{" "}
              <Icon
                path={mdiTriangleDown}
                size={0.3}
                className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 w-full sm:w-auto">
              <div className="sm:w-[250px] flex flex-col">
                <button className="hover:bg-gray-200 flex items-center p-2 text-sm">
                  <Icon path={mdiLock} size={0.8} className="me-1" />
                  Change Backup Password
                </button>
                <button className="hover:bg-gray-200 flex items-center p-2 text-sm">
                  <Icon path={mdiLogout} size={0.8} className="me-1" />
                  Logout
                </button>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div
            className="relative top-[70%] 
              h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] 
              bg-[rgb(var(--navbar-dropdown-menu-background-color))]
            "
          />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full start-0 flex w-full justify-end">
        <NavigationMenu.Viewport
          className="bg-[rgb(var(--navbar-dropdown-menu-background-color))] data-[state=open]:animate-scaleIn 
            data-[state=closed]:animate-scaleOut relative mt-[10px] 
            h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] 
            overflow-hidden rounded-[4px] transition-[width,_height]
            duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] end-2
          "
        />
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
