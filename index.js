#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.whiteBright("\t\nWellcome to 'Government Sindh' MUHAMMAD KAMRAN KHAN TESSORI IT Coures program  (Admission Open)\n"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
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
        message: "Select your course enrolled",
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
const courseFees = {
    TypeScript: 6000,
    JavaScript: 5000,
    Python: 10000,
    SQL: 3000,
    HTML: 2500,
    CSS: 2000,
    Ms_Office: 1000,
};
console.log(chalk.bgBlue(`Course Fees: ${courseFees[answers.courses]}/-`));
let payment_method = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Enter your Payment Mathod",
        choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Monay",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
]);
console.log(`You select Payment Method ${payment_method.payment}\n`);
const courseFee = courseFees[answers.courses];
const paymentAmount = parseFloat(payment_method.amount);
if (courseFee === paymentAmount) {
    console.log(chalk.bold.bgCyan.whiteBright("\tCongratulations, you have purchased this course.\n"));
    console.log(chalk.green(`Student Name: ${chalk.bold.underline(answers.students)}`));
    console.log(chalk.green(`Student ID: ${chalk.bold.underline(randomNumber)}`));
    console.log(chalk.green(`Course: ${chalk.bold.underline(answers.courses)}`));
}
else {
    console.log(chalk.redBright("invalid amount due to course\n"));
}
