const nextConfig = {
  experimental: {
    redirects() {
      return [
        {
          source: "/docs{/}?",
          permanent: false,
          destination: "/docs/getting-started",
        },
      ];
    },
  },
};

module.exports = nextConfig;
