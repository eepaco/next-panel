// [component]-[slot(s)]-modifier-[property]-[pseudo(s)]-unit
// modifiers: primary, secondary, warning, success, info, danger
// pseudos (https://mui.com/material-ui/customization/how-to-customize): active, checked, completed, disabled, error, expanded, focusVisible, focused, readOnly, required, selected

import TypedMergeable from "./TypedMergeable"

export type CssTailwindGlobalHexColors = {
  "primary-color": string
  "secondary-color": string
}

type CssBodyGlobalHexColors = {
  "body-background-color": string
}

type CssNavbarGlobalHexColors = {
  "navbar-background-color": string
  "navbar-text-color": string
  "navbar-item-background-hover-color": string
  "navbar-dropdown-menu-background-color": string
  "navbar-dropdown-menu-border-color": string
}

type CssSidebarGlobalHexColors = {
  "sidebar-background-color": string
  "sidebar-header-background-color": string
  "sidebar-header-background-hover-color": string
  "sidebar-item-background-color": string
  "sidebar-item-background-hover-color": string
  "sidebar-item-text-color": string
  "sidebar-item-icon-color": string
  "sidebar-item-text-active-color": string
  "sidebar-item-icon-active-color": string
  "sidebar-subitem-text-color": string
  "sidebar-subitem-icon-color": string
  "sidebar-subitem-text-hover-color": string
  "sidebar-subitem-icon-hover-color": string
}

type CssAlertGlobalHexColors = {
  "alert-warning-background-color": string
  "alert-warning-text-color": string
  "alert-danger-background-color": string
  "alert-danger-text-color": string
  "alert-success-background-color": string
  "alert-success-text-color": string
  "alert-info-background-color": string
  "alert-info-text-color": string
}

type CssButtonGlobalHexColors = {
  "button-background-color": string
  "button-background-hover-color": string
  "button-background-active-color": string
  "button-background-active-hover-color": string
  "button-background-disabled-color": string
  "button-border-color": string
  "button-border-hover-color": string
  "button-border-active-color": string
  "button-border-active-hover-color": string
  "button-border-disabled-color": string
  "button-text-color": string
  "button-text-hover-color": string
  "button-text-active-color": string
  "button-text-active-hover-color": string
  "button-text-disabled-color": string
}

type CssInputGlobalHexColors = {
  "input-background-color": string
  "input-background-focus-color": string
  "input-border-color": string
  "input-border-focus-color": string
  "input-text-color": string
  "input-placeholder-color": string
}

export function getComputedCssGlobalColors(
  variables: CssTailwindGlobalHexColors &
    Partial<CssBodyGlobalHexColors & CssNavbarGlobalHexColors>
): CssBodyGlobalHexColors & CssNavbarGlobalHexColors {
  const primaryColor = variables["primary-color"]
  const secondaryColor = variables["secondary-color"]

  return new TypedMergeable({
    "body-background-color": primaryColor,
    "navbar-background-color":
      variables["navbar-background-color"] ?? primaryColor,
  }).merge((obj) => ({
    "navbar-text-color":
      variables["navbar-text-color"] ??
      getContastColor(obj["navbar-background-color"]),
    "navbar-item-background-hover-color":
      variables["navbar-item-background-hover-color"] ??
      obj["navbar-background-color"],
    "navbar-dropdown-menu-background-color":
      variables["navbar-item-background-hover-color"] ??
      obj["navbar-background-color"],
    "navbar-dropdown-menu-border-color":
      variables["navbar-item-background-hover-color"] ??
      obj["navbar-background-color"],
  })).value
}

export function mapPropetiesToCss(
  tailwindColors: CssTailwindGlobalHexColors,
  colors: CssBodyGlobalHexColors & CssNavbarGlobalHexColors
) {
  const result = []
  result.push(
    ...Object.entries(tailwindColors).map(
      ([key, value]) =>
        `"${key}": ${hexToRgb(value)!.r} ${hexToRgb(value)!.g} ${
          hexToRgb(value)!.b
        };`
    )
  )
  result.push(
    ...Object.entries(colors).map(([key, value]) => `"${key}": ${value};`)
  )

  return result.join('\n');
}

// https://stackoverflow.com/a/5624139
function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined
}

// https://stackoverflow.com/a/11868159
function getContastColor(hexColor: string): string {
  const rgb = hexToRgb(hexColor)!

  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
  )
  return brightness > 125 ? "#000" : "#fff"
}
