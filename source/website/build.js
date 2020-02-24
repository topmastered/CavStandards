const fse = require("fs-extra");
const { exec } = require("child_process");
const chalk = require("chalk");
const path = require("path");

let err = e => {
    console.log(`\n\n${chalk.red.bold("Error Encountered")}\n\n${e}\n\n${chalk.yellow.bold.underline("Build failed. Quitting...")}`);
    process.exit(1);
};

let runCommand = (cmd, cb = returned => {}) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            err(error.message);
            return;
        }
        if (stderr) {
            err(stderr);
            return;
        }
        cb(stdout);
    });
};

// ==BEGIN==
console.clear(); // clear console

// Remove the old docs folder
console.log(`[${chalk.yellow("INFO")}]     Deleting old build`);
fse.emptyDir(path.join(__dirname, "..", "..", "docs"));
console.log(`[${chalk.green("OK")}]       Finished removing old build`);

// Run D-Build
console.log(`[${chalk.yellow("INFO")}]     Running D-Build`);
runCommand("npm run d-build", r => {
    console.log(`[${chalk.green("OK")}]       D-Build finished`);

    // Copy files
    console.log(`[${chalk.yellow("INFO")}]     Copying build to docs dir`);
    fse.copySync(path.join(__dirname, "build", "cav-standards"), path.join(__dirname, "..", "..", "docs"));
    console.log(`[${chalk.green("OK")}]       Finished copying`);

    // ==END==
    console.log(`\n\n${chalk.green.bold.underline("FINISHED BUILDING")}`);
});
