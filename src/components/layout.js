import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import {
  ASIDE_PADDING_LEFT,
  ASIDE_WIDTH,
  CONTENT_WIDTH,
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
} from '../constants/layout';

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <div
          css={theme =>
            mq({
              display: 'grid',
              gridTemplateColumns: [
                '1fr',
                `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${CONTENT_WIDTH +
                  SIDEBAR_WIDTH}px) / 2 + ${SIDEBAR_WIDTH}px)) 1fr`,
                `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${CONTENT_WIDTH +
                  SIDEBAR_WIDTH}px) / 2 + ${SIDEBAR_WIDTH}px)) ${CONTENT_WIDTH}px 1fr`,
              ],
              height: '100%',
              backgroundColor: theme.colors.background,
            })
          }
        >
          <div
            css={mq({
              borderRight: '1px solid #e1e7ed',
              display: ['none', 'flex'],
              alignItems: 'flex-end',
              flexDirection: 'column',
              flexGrow: 1,
              minWidth: SIDEBAR_MIN_WIDTH,
              width: '100%',
            })}
          >
            <div
              css={mq({
                position: 'sticky',
                width: SIDEBAR_WIDTH,
                height: [null, '100vh'],
                top: 0,
              })}
            >
              <Sidebar location={location} />
            </div>
          </div>
          {/* {config.sidebar.title ? (
            <div dangerouslySetInnerHTML={{ __html: config.sidebar.title }} />
          ) : null} */}
          <div
            css={theme =>
              mq({
                display: 'flex',
                flexGrow: 1,
                paddingTop: [16, 32],
                paddingLeft: [16, 64],
                paddingBottom: [16, 32],
                paddingRight: [16, 0],
                backgroundColor: theme.colors.background,
              })
            }
          >
            <div css={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{children}</div>
            <div
              css={mq({
                display: ['none', 'none', 'block'],
                paddingLeft: ASIDE_PADDING_LEFT,
                width: ASIDE_WIDTH,
              })}
            >
              <RightSidebar location={location} />
            </div>
          </div>
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;
