"use client";

import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div style={{ height: 1000 }}>
      <h1 className="text-6xl">
        <FormattedMessage
          defaultMessage={"Simple Message"} // Fallback string if ID not found for translation
          id="home.name"
        />
      </h1>
    </div>
  );
}
