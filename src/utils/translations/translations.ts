import React from 'react';
import {I18n} from 'i18n-js';
import en from '../../constants/translations/translations-files/en.json';
import uz from '../../constants/translations/translations-files/uz.json';

export const i18n = new I18n({
  en: {...en},
  uz: {...uz},
});

export const initTranslations = () => {
  i18n.defaultLocale = 'uz';
  i18n.locale = 'uz';
};
