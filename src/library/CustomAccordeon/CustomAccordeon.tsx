import React, { useState } from 'react';

import { Icons, IconsDB } from '../Icons';
import './CustomAccordeon.css';

export interface CustomAccordeonProps {
  title: string;
  isArrowIcon?: boolean;
  isOpenDefault?: boolean;
  icon?: IconsDB;
  children: React.ReactNode;
}

export const CustomAccordeon: React.FC<CustomAccordeonProps> = ({
  title,
  children,
  isArrowIcon = true,
  isOpenDefault = false,
  icon = null,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="ca-title">
      <div className="ca-title-container" onClick={onClickToggle}>
        <Icons icon={isOpen ? 'bottomArrow' : 'rightArrow'} />
        {icon && <Icons icon={icon} />}
        <span className="ca-title-content">{title}</span>
      </div>
      <div className={`ca-content ${isOpen ? 'ca-content-active' : ''}`}>{children}</div>
    </section>
  );
};
