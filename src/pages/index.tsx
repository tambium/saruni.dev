import React from "react";
import { font, colors, useGlobalTheme } from "@saruni-ui/theme";

import { Topbar } from "../components/topbar";
import { oppositeMode } from "../utils/color/oppositeMode";
import { Link } from "gatsby";
import { Tambium } from "../components/icon/glyphs";
import { mq } from "../constants/layout";
import { SEO } from "../components/seo";
import { useTheme } from "../hooks/use-theme";

interface HomeProps {
  location: Location;
}

const FEATURES = [
  {
    title: "Single ecosystem",
    details:
      "Write JavaScript or TypeScript across the stack with generators for common code.",
  },
  {
    title: "Batteries included",
    details:
      "Ships with plug-and-play support for auth, emails, image uploads and more.",
  },
  {
    title: "Own your infrastructure",
    details: "Configurable Serverless deploys to AWS out of the box.",
  },
  {
    title: "Extensible zero config",
    details: "Get started with sensible defaults and modify where needed.",
  },
];

const Home: React.FC<HomeProps> = ({ location }) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});
  const { isLight } = useTheme();

  return (
    <React.Fragment>
      <SEO />
      <div>
        <div
          css={{
            margin: "0 auto",
            position: "relative",
            width: "100%",
          }}
        >
          <Topbar location={location} maxWidth={752} />
        </div>
        <section
          css={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            css={{
              margin: "0 auto",
              maxWidth: 752,
              padding: "72px 16px 104px",
              width: "100%",
            }}
          >
            <div
              css={{
                fontSize: font.size.heading,
                fontWeight: 500,
                lineHeight: 1.6,
                paddingBottom: 48,
              }}
            >
              The simplest way to write and deploy fast, scalable full-stack web
              applications in JavaScript.
            </div>
            <div
              css={{
                fontSize: font.size.section,
                lineHeight: 1.5,
                maxWidth: "85%",
                marginBottom: 48,
              }}
            >
              Saruni is a web application framework that provides the
              foundational tooling startups need to write and release apps.
              Modern workflows provide a dreamy developer experience for faster
              iteration thereafter.
            </div>
            <div css={{ alignItems: "center", display: "flex" }}>
              <Link
                css={{
                  backgroundColor: isLight
                    ? colors.background[oppositeMode(mode)]
                    : colors.surfaceNeutralSubdued[mode],
                  borderRadius: 50,
                  color: isLight ? colors.background[mode] : colors.text[mode],
                  display: "inline-flex",
                  padding: "6px 16px",
                  fontSize: font.size.subtitle,
                  fontWeight: 500,
                  marginRight: 24,
                  "&:active": {
                    textDecoration: "none",
                  },
                }}
                to="/docs/getting-started/overview"
              >
                Get started
              </Link>
              <a
                href="https://github.com/tambium/saruni"
                css={{
                  color: colors.text[mode],
                  fontSize: font.size.subtitle,
                  fontWeight: 500,
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
      <section css={{ paddingBottom: 96 }}>
        <div
          css={{
            margin: "0 auto",
            maxWidth: 784,
            padding: "0 16px",
            width: "100%",
          }}
        >
          <div css={{}}>
            <div
              css={mq({
                display: "grid",
                gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
                gridGap: 32,
              })}
            >
              {FEATURES.map((feature, idx) => {
                return (
                  <div
                    css={{
                      backgroundColor: colors.surfaceNeutralSubdued[mode],
                      borderRadius: 4,
                      padding: 16,
                    }}
                    key={idx}
                  >
                    <div
                      css={{
                        fontSize: font.size.section,
                        fontWeight: 500,
                        marginBottom: 12,
                      }}
                    >
                      {feature.title}
                    </div>
                    <div
                      css={{ fontSize: font.size.subtitle, lineHeight: 1.6 }}
                    >
                      {feature.details}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <footer
        css={{
          padding: "0 16px",
          margin: "0 auto",
          maxWidth: 752,
          width: "100%",
        }}
      >
        <div
          css={{
            borderTop: `1px solid ${colors.borderSubdued[mode]}`,
          }}
        >
          <div css={{ padding: "48px 0 64px" }}>
            <div
              css={{
                color: isLight
                  ? colors.background[oppositeMode(mode)]
                  : colors.surfaceNeutralSubdued[mode],
                marginBottom: 16,
              }}
            >
              <Tambium
                secondaryColor={
                  isLight ? colors.background[mode] : colors.text[mode]
                }
                size={48}
              />
            </div>
            <div css={{ fontSize: font.size.body }}>
              © Tambium {new Date().getFullYear()}
            </div>
            <div css={{ fontSize: font.size.body, marginTop: 4 }}>
              Written by{" "}
              <a
                href="https://github.com/r281GQ"
                css={{
                  color: colors.text[mode],
                }}
              >
                Endre Vegh
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/dominicchapman"
                css={{
                  color: colors.text[mode],
                }}
              >
                Dominic Chapman
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
