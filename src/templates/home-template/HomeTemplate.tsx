import React from "react";
import { SIDEBAR_WIDTH, CONTENT_WIDTH } from "../../constants/layout";
import { useTheme } from "emotion-theming";
import { Link } from "gatsby";

const features = [
  {
    title: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default ({ data }) => {
  const theme = useTheme();
  const maxWidth = SIDEBAR_WIDTH + CONTENT_WIDTH;

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <React.Fragment>
      <div
        css={{
          backgroundColor: theme.colors.brandSubdued,
          display: "flex",
          justifyContent: "center",
          minHeight: 50,
        }}
      >
        <header
          css={{
            alignItems: "center",
            display: "flex",
            padding: "0 12px",
            maxWidth,
            width: "100%",
          }}
        >
          <span
            css={{ color: theme.colors.white, fontSize: 21, fontWeight: 600 }}
          >
            Saruni
          </span>
        </header>
      </div>
      <section
        css={{
          backgroundColor: theme.colors.brandSubdued,
          color: theme.colors.white,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div css={{ maxWidth, padding: "64px 12px 88px", width: "100%" }}>
          <div css={{ display: "flex" }}>
            <div css={{ flex: 2, marginBottom: 48 }}>
              <h2
                css={{ fontSize: theme.fonts.size.supertitle, fontWeight: 600 }}
              >
                The simplest way to write fast, scalable full-stack web
                applications in JavaScript.
              </h2>
            </div>
            <div css={{ flex: 1 }} />
          </div>
          <div>
            <Link
              css={{
                backgroundColor: theme.colors.white,
                borderRadius: 4,
                border: `2px solid ${theme.colors.white}`,
                color: theme.colors.brand,
                fontSize: theme.fonts.size.subtitle,
                fontWeight: 500,
                marginRight: 16,
                padding: "16px 24px",
                textDecoration: "none",
              }}
              to="/getting-started"
            >
              Get started
            </Link>
            <a
              css={{
                borderRadius: 4,
                color: theme.colors.white,
                border: `2px solid ${theme.colors.white}`,
                fontSize: theme.fonts.size.subtitle,
                fontWeight: 500,
                padding: "16px 24px",
                textDecoration: "none",
              }}
              href="https://github.com/tambium/saruni"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        css={{
          backgroundColor: theme.colors.brand,
          color: theme.colors.white,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          css={{
            display: "grid",
            gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            maxWidth,
            padding: "48px 12px",
            width: "100%",
          }}
        >
          {features.map((feature, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === features.length - 1;

            return (
              <div
                css={{
                  marginLeft: !isFirst ? 16 : undefined,
                  marginRight: !isLast ? 16 : undefined,
                }}
                key={idx}
              >
                <h3 css={{ marginBottom: 8 }}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <footer>footer</footer>
    </React.Fragment>
  );
};
