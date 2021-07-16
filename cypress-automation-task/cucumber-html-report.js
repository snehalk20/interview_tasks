const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "91",
        },
        device: "Laptop",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});
// var reporter = require('cucumber-html-reporter');
// var options = {
//     theme: 'bootstrap',
//     jsonFile: "cypress/cucumber-json",
//     output: "./reports/cucumber-htmlreport.html",
//     reportSuiteAsScenarios: true,
//     scenarioTimestamp: true,
//     launchReport: true,
//     metadata: {
//         "App Version": "0.3.2",
//         "Test Environment": "STAGING",
//         "Browser": "Chrome 91",
//         "Platform": "Windows 10",
//         "Parallel": "Scenarios",
//         "Executed": "Remote"
//     }
// };

// reporter.generate(options);