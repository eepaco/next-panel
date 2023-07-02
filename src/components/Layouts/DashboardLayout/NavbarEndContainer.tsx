"use client"

import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function NavbarEndContainer(props: { children: ReactNode }) {

  const [ref, setRef] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {
    const element = document.getElementById('navbar-end-container')
    if (element) setRef(element)
  }, [])

  return ref ? createPortal(props.children, ref) : <></>
}