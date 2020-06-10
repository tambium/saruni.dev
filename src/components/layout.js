import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';

const SIDEBAR_WIDTH_FULL = 250;

const SIDEBAR_WIDTH_MIN = 225;

const CONTENT_WIDTH_FULL = 1260;

const CONTENT_WIDTH_MIN = 1000;

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns:
    minmax(
      ${SIDEBAR_WIDTH_FULL}px,
      calc((100% - ${CONTENT_WIDTH_FULL}px) / 2 + ${SIDEBAR_WIDTH_MIN}px)
    )
    ${CONTENT_WIDTH_MIN}px 1fr;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
  }

  .sideBarUL .item > a:hover {
    background-color: #1ed3c6;
    color: #fff !important;

    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
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

const LeftSideBarWidth = styled('div')`
  width: 298px;
`;

const RightSideBarWidth = styled('div')`
  width: 224px;
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        {config.sidebar.title ? (
          <div
            className={'sidebarTitle sideBarShow'}
            dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
          />
        ) : null}
        <Content>
          <MaxWidth>{children}</MaxWidth>
          <RightSideBarWidth className={'hiddenMobile'}>
            <RightSidebar location={location} />
          </RightSideBarWidth>
        </Content>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
