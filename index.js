import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs";
import { findShortestPath } from "./pathFinder/index.js";
const argv = yargs(hideBin(process.argv)).argv;

if (argv.input) {
  readFile(argv.input, "utf8", function (err, file) {
    const {from, to, color = "white"} = argv;
    const inputFileParsed = JSON.parse(file);
    const result = findShortestPath({from, to, color, pathsConfiguration: inputFileParsed})
    console.log(result.reduce((acc, current) => acc + "->" + current))
  });
}
