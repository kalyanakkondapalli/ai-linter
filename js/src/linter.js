const { exec } = require('child_process');
const { getAISuggestion } = require('./aiSuggester');

function lintFile(filePath) {
    exec(`eslint ${filePath}`, (err, stdout, stderr) => {
        console.log("ESLint output:\n", stdout);
        getAISuggestion(stdout).then(aiFeedback => {
            console.log("\nAI Suggestions:\n", aiFeedback);
        });
    });
}

module.exports = { lintFile };