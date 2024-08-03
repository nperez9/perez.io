export interface MenuData {
  key: string;
  tooltip?: string;
  title?: string;
}

export const menuData: MenuData[] = [
  {
    key: 'files',
    tooltip: 'Proyects',
    title: 'Proyects',
  },
  {
    key: 'search',
    tooltip: 'social networks',
    title: 'Social Networks',
  },
  { key: 'settings', tooltip: 'Page Settings', title: 'Page Settings' },
];
