const nextra = require('nextra');

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  reactStrictMode: true,
  transpilePackages: ["ui"],
})

module.exports = withNextra();
