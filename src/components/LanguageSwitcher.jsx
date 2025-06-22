// src/components/LanguageSwitcher.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';

  return (
    <Button
      variant="outline-light"
      size="sm"
      onClick={toggleLanguage}
      className="language-switcher"
      title={currentLang === 'en' ? t('common.switchToIndonesian') : t('common.switchToEnglish')}
    >
      <span className="flag-icon">
        {currentLang === 'en' ? '🇮🇩' : '🇺🇸'}
      </span>
      <span className="lang-text">
        {currentLang === 'en' ? 'ID' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;