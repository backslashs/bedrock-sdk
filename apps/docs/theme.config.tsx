import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: "flex", alignItems: "center" }}>
      <p style={{ fontWeight: "bold" }}>BedRock</p>
      <p style={{ fontWeight: "normal", marginLeft: "10px" }}>
        Framwork of DApp
      </p>
    </span>
  ),
  project: {
    link: "https://github.com/backslashs/bedrock",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/backslashs/bedrock/apps/docs",
  darkMode: true,
  footer: {
    text: "BedRock Docs",
  },
};

export default config;
