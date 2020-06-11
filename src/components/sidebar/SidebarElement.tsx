import React from 'react';

import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import { Link } from '../link';
import { hexToRgba } from '../../utils/color';

interface SidebarElementProps {}

export const SidebarElement: React.FC<SidebarElementProps> = ({
  depth = -1,
  setCollapsed,
  collapsed,
  url,
  title,
  items,
}) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }

  const isActive =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  // console.log(location.pathname, url);

  return (
    <li
      css={theme => ({
        backgroundColor: isActive ? hexToRgba(theme.colors.brand, 0.1) : undefined,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        listStyleType: 'none',
        paddingLeft: depth * 16,
        width: 'auto',
      })}
    >
      {title && (
        <Link
          css={theme => ({
            color: isActive ? theme.colors.brand : theme.colors.text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.5,
            padding: '8px 8px 8px 16px',
            paddingLeft: 10,
            paddingRight: 25,
            borderStyle: 'solid none solid solid',
            borderWidth: '1px 0px 1px 1px',
            borderColor: 'transparent currentcolor transparent transparent',
            textDecoration: 'none',
          })}
          to={url}
        >
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => {
            return (
              <SidebarElement
                depth={depth + 1}
                key={item.url + index.toString()}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                {...item}
              />
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};
