"use client";

import React, { ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export default function LoginLayout(props: { children: ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <h3 className="text-4xl">
            <FormattedMessage
              defaultMessage={"Login Header"}
              id="login.header"
            />
          </h3>
        </nav>
      </header>
      {props.children}
      <footer>
        <h3 className="text-4xl">
          <FormattedMessage defaultMessage={"Login Footer"} id="login.footer" />
        </h3>
      </footer>
    </>
  );
}
