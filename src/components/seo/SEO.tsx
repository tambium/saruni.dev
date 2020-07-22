import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

interface SEOProps {
  children?: React.ReactNode;
  description?: string;
  imageUrl?: string;
  slug?: string;
  title?: string;
}

export const SEO: React.FC<SEOProps> = ({
  children,
  description,
  imageUrl,
  title,
  slug,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteAuthor
            siteDescription
            siteIcon
            siteImage
            siteLanguage
            siteTitle
            siteUrl
          }
        }
      }
    `
  );

  const {
    siteAuthor,
    siteDescription,
    siteIcon,
    siteImage,
    siteLanguage,
    siteTitle,
    siteUrl,
  } = site.siteMetadata;

  const metaTitle = title ? `${siteTitle}: ${title}` : siteTitle;
  const metaUrl = `${siteUrl}${slug}`;
  const metaImage = `${siteUrl}${imageUrl || siteImage}`;
  const metaDescription = description || siteDescription;

  console.log(metaTitle, metaDescription);

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLanguage,
      }}
      title={metaTitle}
    >
      {siteIcon && <link rel="icon" href={siteIcon} />}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta name="google" content="notranslate" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content={siteLanguage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:site" content={siteAuthor} />
      <meta name="twitter:creator" content={siteAuthor} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      {children}
    </Helmet>
  );
};
