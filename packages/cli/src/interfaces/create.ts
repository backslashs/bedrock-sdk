import inquirer from "inquirer";
import type Inquirer from "inquirer";
import BedrockCommand from ".";

const questions: Inquirer.QuestionCollection = [
  {
    type: "input",
    name: "project-name",
    message: "Give your application a name (exemple: bedrock-app)",
  },
  {
    type: "list",
    name: "project-template",
    message: "Choise a template for your Bedrock application",
    choices: [
      {
        type: "choice",
        name: "NextJS (React)",
      },
      {
        type: "choice",
        name: "ViteJS (React)",
      },
      {
        type: "choice",
        name: "Webpack (React)",
      },
      {
        type: "choice",
        name: "None (Just Bedrock SDK)",
      },
    ],
  },
];

export default function CreateFeature(
  cmd: ReturnType<BedrockCommand["createCommand"]>,
) {
  cmd
    .description("Initialize quickly a bedrock projet")
    .argument("[name]", "name of the project")
    .option(
      "-t, --template <name>",
      "Create a project with pre-made configurations",
    )
    .option(
      "-d, --directory <directory>",
      "Define the directory of the project. Default is project's name.",
    )
    .action(async (name, options) => {
      if (!name) {
        const answer = await inquirer.prompt(questions);

        console.log(answer);
      }
    });
}
