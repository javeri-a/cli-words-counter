#!/usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Start typing , or copy and paste your document here....",
  },
]);

const words = answer.sentence.trim().split("");
console.log(words);

console.log(`your words counts is : ${words.length}`);
