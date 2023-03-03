import React, { useState } from 'react';
import './CustomAccordeon.css';

export interface CustomAccordeonProps {
  title: string;
  isArrowIcon?: boolean;
}

export const CustomAccordeon: React.FC<CustomAccordeonProps> = ({ title, children, isArrowIcon = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="ca-title" onClick={onClickToggle}>
        <span>{isOpen ? '< ' : '> '}</span>
        <span>{title}</span>
      </div>
      {isOpen && <div className="ca-content">{children}</div>}
    </section>
  );
};
