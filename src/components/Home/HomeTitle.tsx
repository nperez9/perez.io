import React from 'react';
import { useTranslation } from 'react-i18next';

import { ShowCode } from '../../library';

const HomeTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='tw-align-center tw-relative tw-text-center'>
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4">
        <ShowCode tag="h1"> 
          { t('home.title') } 
        </ShowCode>
      </h1>
      <h2 className="tw-text-2xl tw-font-semibold tw-mb-4">
        <ShowCode tag="h2"> 
          {t('home.subtitle')}
        </ShowCode>
      </h2>
      <h4 className="tw-text-xl tw-font-medium tw-mb-4">
        <ShowCode tag="h4" >
        {t('home.posttitle')}        
        </ShowCode>  
      </h4>
    </section>
  );
};

export default HomeTitle;
