#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Start typing , or copy and paste your document here....",
    },
]);
const words = answer.sentence.trim().split("");
console.log(words);
console.log(`your words counts is : ${words.length}`);
