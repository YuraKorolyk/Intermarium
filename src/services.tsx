import React from 'react';
import {Trans} from 'react-i18next';
import {t} from 'i18next';

export const trans = (path: string, color: "light" | "dark") => {
  return (
    <Trans
      i18nKey={t(path)}
      tOptions={{interpolation: {escapeValue: true}}}
      components={{
        span: <span className={color === 'dark' ? 'highlightDark' : color === 'light' ? 'highlightLight' : ''}/>
      }}
    />
  );
};
