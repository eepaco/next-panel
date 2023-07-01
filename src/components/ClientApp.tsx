import { ReactNode, useEffect, useState } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";

export default function ClientApp(props: { children: ReactNode }) {
  const { dir, lang } = useSelector((state: any) => state.uiConfig);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    import(`@/lang/${lang}.json`).then((messages) => {
      setMessages(messages);
    });
  }, [lang]);

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
  );
}
