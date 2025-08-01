import { ShowCode } from '@library/index';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomePlayMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>
        <ShowCode tag="h3">{t('home.playMe')}</ShowCode>
      </h3>
    </div>
  );
};
