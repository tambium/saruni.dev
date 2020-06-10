import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';

const help = require('./images/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import { SidebarLayout } from '../layouts/sidebar-layout';
import { mq } from '../constants/layout';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

const IconBars = ({ bars = 3 }) => {
  return Array.from(Array(bars).keys()).map(key => {
    const isFirst = key === 0;
    return (
      <span
        key={key}
        css={{
          display: 'block',
          width: 22,
          height: 2,
          borderRadius: 1,
          margin: '0 auto',
          marginTop: !isFirst ? 4 : 0,
          backgroundColor: '#001934',
        }}
      />
    );
  });
};

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => {
  const [isMobileHeaderOpen, setMobileHeaderOpen] = React.useState(false);

  const toggleMobileHeader = () => setMobileHeaderOpen(prevState => !prevState);

  return (
    <StaticQuery
      query={graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
      `}
      render={data => {
        const {
          site: {
            siteMetadata: { helpUrl, headerLinks },
          },
        } = data;

        return (
          <div>
            <div id="navbar">
              <div css={{ display: isMobileHeaderOpen ? 'block' : 'none' }}>
                <SidebarLayout />
                <hr />
              </div>
              <ul>
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt={'Help icon'} />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
            <div
              css={mq({
                height: 60,
                borderBottom: '1px solid #e1e7ed',
                position: 'relative',
                display: ['block', 'none'],
              })}
            >
              <div
                css={{
                  borderRadius: '0',
                  borderTop: '0',
                  marginBottom: '0',
                  border: '0',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  position: 'relative',
                }}
              >
                <span
                  css={{
                    marginRight: 0,
                    display: 'block',
                    position: 'absolute',
                    left: '11px',
                    top: '15px',
                    background: '#fff',
                    border: '0px solid #fff',
                    borderRadius: '4px',
                    width: '36px',
                    height: '33px',
                    right: '20px',
                    padding: '8px 5px',
                  }}
                  onClick={toggleMobileHeader}
                  onKeyPress={toggleMobileHeader}
                  role="button"
                  tabIndex={0}
                >
                  <IconBars />
                </span>
              </div>
              {isSearchEnabled ? (
                <div>
                  <LoadableComponent collapse={true} indices={searchIndices} />
                </div>
              ) : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default Header;
