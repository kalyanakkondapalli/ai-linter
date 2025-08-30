#!/usr/bin/env node
import { lintFile } from "../src/linter.js";

const file = process.argv[2];
if (!file) {
    console.error("Please provide a file to lint.");
    process.exit(1);
}
lintFile(file);