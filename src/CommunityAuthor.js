import React from 'react';

const CommunityAuthor = ({ name, imageUrl, twitterUrl, githubUrl, description }) => {
  return (
    <>
      <h2>About the community author</h2>
      <div>
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <div>
            <strong>{name}</strong>
            {twitterUrl ? (
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <img src="" alt="Twitter Icon" aria-label="Twitter" />
              </a>
            ) : null}
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img src="" alt="Github Icon" aria-label="Github" />
              </a>
            ) : null}
          </div>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
