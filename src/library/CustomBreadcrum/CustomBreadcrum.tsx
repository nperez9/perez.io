import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

interface CustomBreadcrumProps {}

export const CustomBreadcrum: React.FC<any> = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item> </Breadcrumb.Item>
    </Breadcrumb>
  );
};
