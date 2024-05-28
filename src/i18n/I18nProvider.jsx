import { FC } from "react";
import { useLang } from "./LayoutI18n";
import { IntlProvider } from "react-intl";

import ruMessages from "./messages/ru.json";
import uzMessages from "./messages/uz.json";
import enMessages from "./messages/en.json";

const allMessages = {
  ru: ruMessages,
  uz: uzMessages,
  en: enMessages,
};

const I18nProvider = ({ children }) => {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export { I18nProvider };
