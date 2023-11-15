#!/usr/bin/env node

// import { cosmiconfigSync } from "cosmiconfig";
import BedrockCommand from "./interfaces";

import type { Bedrock } from "./type";

// const explorer = cosmiconfigSync("bedrock");
// const searchedFor = explorer.search();

const program = new BedrockCommand({
  name: "Bedrock ClI",
  description: "Create, Manage, Publish & Monitor your Bedrock dapp.",
  version: "0.0.1",
});

program.parse();

export { Bedrock };
