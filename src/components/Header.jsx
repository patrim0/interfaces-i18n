import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <h1>{t('monchoix')}</h1>
    )
};

export default Header;