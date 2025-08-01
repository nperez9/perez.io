import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink, ShowCode } from '../../../library';

export const HomeCheckMyCv = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>
        <ShowCode tag="h3">{t('home.cv')}</ShowCode>
      </h3>
      <div>
        <ButtonLink link="/cv">{t('home.cvLink')}</ButtonLink>
        <ButtonLink link="/cv">{t('home.cvLink')}</ButtonLink>
      </div>
    </div>
  );
};
