import { input, confirm } from "@inquirer/prompts";

const answers = {
  firstName: await input({ message: "What's your first name?" }),
  allowEmail: await confirm({ message: "Do you allow us to send you email?" }),
};

console.log("!!!", answers);

import * as commander from "commander";
const program = new commander.Command();

// This example shows a simple use of configureHelp.
// This is used as an example in the README.
// Any method on the Help class can be overridden
// See: https://github.com/tj/commander.js/blob/master/lib/help.js

program.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name(), // Just show the name, instead of short usage.
});

program
  .option("-n, --number <numbers...>", "specify numbers")
  .option("-l, --letter [letters...]", "specify letters");

program.parse();

console.log("Options: ", program.opts());
console.log("Remaining arguments: ", program.args);

import * as p from "@clack/prompts";

const group = await p.group(
  {
    name: () =>
      p.text({
        message: "What is your name?",
        defaultValue: "12312",
        placeholder: "asdasd",
      }),
    age: () => p.text({ message: "What is your age?" }),
    color: ({ results }) =>
      p.multiselect({
        message: `What is your favorite color ${results.name}?`,
        options: [
          { value: "red", label: "Red" },
          { value: "green", label: "Green" },
          { value: "blue", label: "Blue" },
        ],
      }),
  },
  {
    // On Cancel callback that wraps the group
    // So if the user cancels one of the prompts in the group this function will be called
    onCancel: ({ results }) => {
      p.cancel("Operation cancelled.");
      // process.exit(0);
    },
  }
);

console.log(group.name, group.age, group.color);
