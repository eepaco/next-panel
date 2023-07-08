"use client"

import { ReactNode, useEffect, useInsertionEffect, useState } from "react"
import { DirectionProvider } from "@radix-ui/react-direction"
import { useSelector } from "react-redux"
import { IntlProvider } from "react-intl"
import { CssTailwindGlobalHexColors, getComputedCssGlobalColors, mapPropetiesToCss } from "@/utils/cssGlobalVariables"

export default function ClientApp(props: { children: ReactNode }) {
  const { dir, lang } = useSelector((state: any) => state.uiConfig)
  const [messages, setMessages] = useState({})

  useInsertionEffect(() => {
    let styleElement = document.getElementById('global-variables')
    if (styleElement) return

    const tailwindColors: CssTailwindGlobalHexColors = {
      "primary-color": '#499258',
      "secondary-color": "#499259"
    }

    styleElement = document.createElement('style')
    styleElement.id = "global-variables"
    styleElement.innerHTML = `:root { \n` +
      mapPropetiesToCss(tailwindColors, getComputedCssGlobalColors(tailwindColors))
      + `\n}`
    document.head.appendChild(styleElement)
  })

  useEffect(() => {
    import(`@/lang/${lang}.json`).then((messages) => {
      setMessages(messages)
    })
  }, [lang])

  return (
    <DirectionProvider dir={dir}>
      <IntlProvider
        locale={lang}
        defaultLocale="en"
        key={lang}
        messages={messages}
      >
        {props.children}
      </IntlProvider>
    </DirectionProvider>
  )
}
