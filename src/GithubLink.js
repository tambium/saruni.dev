import React from 'react';
const githubIcon = require('./components/images/github.svg');

const GithubLink = ({ link, text }) => {
  return (
    <a
      css={{
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        opacity: '0.7',
      }}
      href={link}
    >
      <img css={{ marginRight: 5, width: 15 }} src={githubIcon} alt="github" />
      {text}
    </a>
  );
};

export default GithubLink;
