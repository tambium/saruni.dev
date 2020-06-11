import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { ThemeProvider } from '../../components/theme-provider';
import mdxComponents from '../../components/mdxComponents';
import { SidebarLayout } from '../../layouts/sidebar-layout';
import RightSidebar from '../../components/rightSidebar';
import {
  ASIDE_PADDING_LEFT,
  ASIDE_WIDTH,
  CONTENT_WIDTH,
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
} from '../../constants/layout';

interface DocsLayoutProps {
  children: React.ReactChild;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
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
                display: 'flex',
                flexDirection: 'column',
                height: [null, '100vh'],
                position: 'sticky',
                top: 0,
                width: SIDEBAR_WIDTH,
              })}
            >
              <SidebarLayout />
            </div>
          </div>
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
