import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Sidebar } from '../../components/sidebar';
import { ExternalLink } from 'react-feather';
import config from '../../../config';
import { TOPBAR_HEIGHT } from '../../constants/layout';

interface SidebarLayoutProps {}

const ListItem = styled(({ active, level, ...props }) => {
  return (
    <li>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #d44f3e !important;
    }

    ${props =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

export const SidebarLayout: React.FC<SidebarLayoutProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                fields {
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={({ allMdx }) => {
        return (
          <aside>
            <div css={{ height: TOPBAR_HEIGHT, padding: '16px 0px 16px 8px' }}>
              <span css={{ fontSize: 21, fontWeight: 700 }}>{config?.sidebar?.title}</span>
              <span
                css={theme => {
                  return {
                    color: theme.colors?.brand,
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    paddingLeft: 6,
                  };
                }}
              >
                Docs
              </span>
            </div>
            <ul css={{ paddingTop: 8 }}>
              <Sidebar edges={allMdx.edges} />
              {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
              {config.sidebar.links.map((link, key) => {
                if (link.link !== '' && link.text !== '') {
                  return (
                    <ListItem key={key} to={link.link}>
                      {link.text}
                      <ExternalLink size={14} />
                    </ListItem>
                  );
                }
              })}
            </ul>
          </aside>
        );
      }}
    />
  );
};
