import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', fontFamily: 'system-ui' }}>
      <img style={{ width: 42 }} alt='logo' src='/logo.png' />
      <p style={{ fontWeight: "bold", marginLeft: 12 }}>BedrockSDK</p>
    </span>
  ),
  project: {
    link: 'https://github.com/backslashs/bedrock-sdk',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/backslashs/bedrock-sdk/tree/main/apps/docs',
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Bedrock',
      openGraph: {
        siteName: 'Bedrock SDK - Documentation'
      }
    }
  },
};

export default config;
