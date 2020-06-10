import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`;

export default {
  h1: props => (
    <h1
      css={{
        fontSize: '26px',
        fontWeight: '800',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h2: props => (
    <h2
      css={{
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h3: props => (
    <h3
      css={{
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h4: props => (
    <h4
      css={{
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h5: props => (
    <h5
      css={{
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  h6: props => (
    <h6
      css={{
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '1.5',
        marginBottom: '16px',
        marginTop: '32px',
      }}
      id={props.children.replace(/\s+/g, '').toLowerCase()}
      {...props}
    />
  ),
  p: props => (
    <p
      css={{
        margin: '16px 0px 32px',
        lineHeight: '1.625',
      }}
      {...props}
    />
  ),
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
