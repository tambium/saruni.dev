import React from 'react';

import config from '../../../config';
import { buildSidebarItems } from './utils';
import { SidebarElement } from './.';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({ edges }) => {
  let [sidebarItems] = React.useState(() => {
    return buildSidebarItems(edges);
  });

  const defaultCollapsed = {};

  sidebarItems.items.forEach(item => {
    if (config.sidebar.collapsedNav && config.sidebar.collapsedNav.includes(item.url)) {
      defaultCollapsed[item.url] = true;
    } else {
      defaultCollapsed[item.url] = false;
    }
  });
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  return <SidebarElement setCollapsed={toggle} collapsed={collapsed} {...sidebarItems} />;
};
