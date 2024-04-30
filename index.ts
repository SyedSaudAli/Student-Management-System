#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.underline.whiteBright(
    "\t\nWellcome to 'Government Sindh' MUHAMMAD KAMRAN KHAN TESSORI IT Coures program  (Admission Open)\n"
  )
);

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);
let answers = await inquirer.prompt([
  {
    name: "students",
    type: "input",
    message: "Enter Student Name: ",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter a non-empty value.";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "Select your course enrolled: ",
    choices: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "HTML",
      "Css",
      "Ms_Office",
    ],
  },
]);

const studBalance: number = 0;

const courseFees: { [key: string]: number } = {
  TypeScript: 6000,
  JavaScript: 5000,
  Python: 10000,
  SQL: 3000,
  HTML: 2500,
  CSS: 2000,
  Ms_Office: 1000,
};

console.log(chalk.bgBlue(`\n\tCourse Fees: ${courseFees[answers.courses]}/-`));
console.log(chalk.blue(`\tBalance: ${studBalance}\n`));

let payment_method = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Enter your Payment Mathod.",
    choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
  },
  {
    name: "amount",
    type: "input",
    message: "Transfer Money:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter a non-empty value.";
    },
  },
]);

const courseFee = courseFees[answers.courses];
const paymentAmount = parseFloat(payment_method.amount);

if (courseFee === paymentAmount) {
  console.log(
    chalk.bold.bgCyan.whiteBright(
      "\tCongratulations, you have purchased this course.\n"
    )
  );

  let viewAndExit = await inquirer.prompt([
    {
      name: "information",
      type: "list",
      message: "Student info",
      choices: ["View", "Exit"],
    },
  ]);
  if (viewAndExit.information === "View") {
    console.log(
      chalk.bold.bgCyan.whiteBright(
        `\tCongratulations, ${answers.students} you have purchased this course.\n`
      )
    );
    console.log(chalk.bold.blue(" Your Status..."));
    console.log(
      chalk.green(`Student Name: ${chalk.bold.underline(answers.students)}`)
    );
    console.log(
      chalk.green(`Student ID: ${chalk.bold.underline(randomNumber)}`)
    );
    console.log(
      chalk.green(`Course: ${chalk.bold.underline(answers.courses)}`)
    );
    console.log(
      chalk.green(`Course Fees: ${chalk.bold.underline(paymentAmount)}`)
    );
    console.log(
      chalk.green(
        `Balance: ${chalk.bold.underline(studBalance + paymentAmount)}`
      )
    );
  } else {
    console.log(chalk.redBright("\n\tExisting student Management system\n"));
  }
} else {
  console.log(chalk.redBright("\n\tinvalid amount due to course\n"));
}
