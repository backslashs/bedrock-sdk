import { Command } from "commander";
import CreateFeature from "./create";

export default class BedrockCommand extends Command {
  feature(
    name: string,
    feature: (cmd: ReturnType<this["createCommand"]>) => any,
  ) {
    feature(this.command(name));
  }

  constructor({
    name,
    description,
    version,
  }: {
    name: string;
    description: string;
    version: string;
  }) {
    super();

    this.name(name).description(description).version(version);

    this.feature("create", CreateFeature);
  }
}
