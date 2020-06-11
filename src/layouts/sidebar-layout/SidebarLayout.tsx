import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Sidebar } from '../../components/sidebar';
import { ExternalLink } from 'react-feather';
import config from '../../../config';
import { TOPBAR_HEIGHT } from '../../constants/layout';

interface SidebarLayoutProps {}

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
          <React.Fragment>
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
            <ul css={{ flex: 1, paddingTop: 8 }}>
              <Sidebar edges={allMdx.edges} />
            </ul>
            <ul css={{ padding: '8px 24px 8px 8px' }}>
              {config.sidebar.links.map((link, key) => {
                if (link.link !== '' && link.text !== '') {
                  return (
                    <li
                      key={key}
                      css={{
                        listStyleType: 'none',
                      }}
                    >
                      <a
                        css={{
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                        <ExternalLink size={14} />
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </React.Fragment>
        );
      }}
    />
  );
};
