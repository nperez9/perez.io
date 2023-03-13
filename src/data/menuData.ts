export interface MenuData {
  key: string;
  tooltip?: string;
  title?: string;
}

export const menuData: MenuData[] = [
  {
    key: 'files',
    tooltip: 'portfolio',
    title: 'Portfolio',
  },
  {
    key: 'search',
    tooltip: 'social networks',
    title: 'Social Network',
  },
  { key: 'settings', tooltip: 'settings', title: 'Page Settings' },
  // { key: 'debug' },
  // { key: 'extensions' },
];
