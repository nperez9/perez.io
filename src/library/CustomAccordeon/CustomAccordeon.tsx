import React, { useState } from 'react';

import { Icons } from '../Icons';
import './CustomAccordeon.css';

export interface CustomAccordeonProps {
  title: string;
  isArrowIcon?: boolean;
  isOpenDefault?: boolean;
}

export const CustomAccordeon: React.FC<CustomAccordeonProps> = ({ title, children, isArrowIcon = true, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="ca-title">
      <div className="ca-title-container" onClick={onClickToggle}>
        <Icons icon={isOpen ? 'bottomArrow' : 'rightArrow'} />
        <span className="ca-title-content">{title}</span>
      </div>
      <div className={`ca-content ${isOpen ? 'ca-content-active' : ''}`}>{children}</div>
    </section>
  );
};
