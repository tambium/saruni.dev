import React from "react";
import { font, colors, useGlobalTheme } from "@saruni-ui/theme";

import { Topbar } from "../../components/topbar-next";
import { oppositeMode } from "../../utils/color/oppositeMode";
import { Link } from "gatsby";
import { Tambium } from "../../components/icon/glyphs";

interface HomeProps {}

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

export const Home: React.FC<HomeProps> = ({}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <React.Fragment>
      <div>
        <div
          css={{
            margin: "0 auto",
            position: "relative",
            width: "100%",
          }}
        >
          <Topbar maxWidth={752} />
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
              padding: "72px 12px 104px",
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
              Saruni is web application framework that provides the foundational
              tooling startups need to write and release apps. Modern workflows
              provide a dreamy developer experience for faster iteration
              thereafter.
            </div>
            <div css={{ alignItems: "center", display: "flex" }}>
              <Link
                css={{
                  backgroundColor: colors.background[oppositeMode(mode)],
                  borderRadius: 50,
                  color: colors.text[oppositeMode(mode)],
                  display: "inline-flex",
                  padding: "6px 16px",
                  fontSize: font.size.subtitle,
                  fontWeight: 500,
                  marginRight: 16,
                  "&:active": {
                    textDecoration: "none",
                  },
                }}
                to="/docs/overview"
              >
                Get started
              </Link>
              <div
                css={{
                  fontSize: font.size.subtitle,
                  fontWeight: 500,
                }}
              >
                GitHub
              </div>
            </div>
          </div>
        </section>
      </div>
      <section css={{ padding: 48, paddingBottom: 96 }}>
        <div css={{ margin: "0 auto", maxWidth: 792, width: "100%" }}>
          <div css={{ padding: "0 12px" }}>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: 32,
              }}
            >
              {FEATURES.map((feature, idx) => {
                return (
                  <div
                    css={{
                      backgroundColor: colors.surfaceNeutralSubdued[mode],
                      borderRadius: 4,
                      padding: 20,
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
      <footer css={{ padding: 48, paddingBottom: 96 }}>
        <div
          css={{
            margin: "0 auto",
            borderTop: `1px solid ${colors.borderSubdued[mode]}`,
            maxWidth: 752,
            width: "100%",
          }}
        >
          <div css={{ padding: "48px 12px" }}>
            <div css={{ marginBottom: 16 }}>
              <Tambium size={48} />
            </div>
            <div css={{ fontSize: font.size.body }}>
              © Tambium {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
