import React from "react";
import { font, colors, useGlobalTheme, hexToRgba } from "@saruni-ui/theme";

import { Topbar } from "../../components/topbar-next";
import { Backdrop } from "./styled";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <React.Fragment>
      <div
        css={{
          margin: "0 auto",
          position: "relative",
          width: "100%",
        }}
      >
        <Topbar maxWidth={752} />
      </div>
      <section css={{ marginTop: 24, position: "relative", zIndex: 1 }}>
        <div
          css={{
            margin: "0 auto",
            maxWidth: 752,
            padding: "0 12px",
            width: "100%",
          }}
        >
          <div
            css={{
              color: colors.text[mode],
              fontSize: font.size.heading,
              fontWeight: 500,
              lineHeight: 1.6,
              padding: "48px 0",
            }}
          >
            The simplest way to write fast, scalable full-stack web applications
            in JavaScript.
          </div>
        </div>
      </section>
      <Backdrop mode={mode} />
      <section>
        <div
          css={{
            margin: "0 auto",
            maxWidth: 752,
            padding: "0 12px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            css={{
              color: colors.text[mode],
              fontSize: font.size.subtitle,
              lineHeight: 1.5,
              maxWidth: "80%",
            }}
          >
            Saruni is a web application framework that uses a modern stack to
            improve developer experience. Our goal is for small development
            teams to feel comfortable writing and deploying world-class
            applications.
          </div>
        </div>
      </section>
      <section css={{ marginTop: 200 }}>
        <div css={{ margin: "0 auto", maxWidth: 752, width: "100%" }}>
          <div css={{ margin: "48px 0" }}>
            <div css={{ marginBottom: 16 }}>Features</div>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: 24,
              }}
            >
              {new Array(6).fill(null).map((feature, idx) => {
                return (
                  <div key={idx}>
                    <div>Feature {idx + 1}</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </React.Fragment>
  );
};
