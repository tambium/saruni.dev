import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';
import {
  SIDEBAR_WIDTH_FULL,
  SIDEBAR_WIDTH_MIN,
  CONTENT_WIDTH_FULL,
  CONTENT_WIDTH_MIN,
} from '../constants/layout';

const Content = styled('main')`
  display: flex;
  flex-grow: 1;

  padding-top: 32px;
  padding-left: 64px;
  padding-bottom: 32px;

  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const Layout = ({ children, location }) => {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        {/* <Wrapper> */}
        <div
          css={theme => ({
            display: 'grid',
            gridTemplateColumns: `minmax(${SIDEBAR_WIDTH_FULL}px, calc((100% - ${CONTENT_WIDTH_FULL}px) / 2 + ${SIDEBAR_WIDTH_MIN}px)) ${CONTENT_WIDTH_MIN}px 1fr`,
            height: '100%',
            backgroundColor: theme.colors.background,
          })}
        >
          <div
            css={{
              borderRight: '1px solid #e1e7ed',
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
              flexGrow: 1,
              minWidth: SIDEBAR_WIDTH_FULL,
              width: '100%',
            }}
            className={'hiddenMobile'}
          >
            <div css={{ position: 'sticky', width: SIDEBAR_WIDTH_MIN, height: '100vh', top: 0 }}>
              <Sidebar location={location} />
            </div>
          </div>
          {config.sidebar.title ? (
            <div
              className={'sidebarTitle sideBarShow'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
            />
          ) : null}
          <Content>
            <div css={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{children}</div>
            <div css={{ paddingLeft: 50, width: SIDEBAR_WIDTH_FULL }} className={'hiddenMobile'}>
              <RightSidebar location={location} />
            </div>
          </Content>
        </div>
        {/* </Wrapper> */}
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
