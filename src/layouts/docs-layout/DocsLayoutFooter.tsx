import React from "react";
import { Link } from "gatsby";
import { useTheme } from "emotion-theming";
import { IPrevNext } from "../../types";

interface DocsLayoutFooterProps {
  prevNext: IPrevNext;
}

const PrevNext = ({ prevNext }: { prevNext: IPrevNext }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      {Object.keys(prevNext).map((key) => {
        const isNext = key === "next";
        const title = isNext ? "Next" : "Previous";

        return (
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: isNext ? "flex-end" : undefined,
              textAlign: isNext ? "right" : undefined,
            }}
            key={key}
          >
            {prevNext[key].link && (
              <Link
                css={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  width: "100%",
                }}
                to={prevNext[key].link}
              >
                <div
                  css={{
                    color: theme.colors.textSubtle,
                    fontSize: theme.fonts.size.micro,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {title}
                </div>
                <div
                  css={{
                    color: theme.colors.brand,
                    fontSize: theme.fonts.size.small,
                  }}
                >
                  {prevNext[key].title}
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export const DocsLayoutFooter: React.FC<DocsLayoutFooterProps> = ({
  prevNext,
}) => {
  const theme = useTheme();

  return (
    <div
      css={{
        borderTop: `1px solid ${theme.colors.surface}`,
        marginTop: 24,
        paddingTop: 24,
      }}
    >
      <div
        css={{
          display: "grid",
          gridGap: 16,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <PrevNext prevNext={prevNext} />
      </div>
    </div>
  );
};
