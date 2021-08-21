import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs";
import { findShortestPath } from "./pathFinder/index.js";
const argv = yargs(hideBin(process.argv)).argv;



if (argv.input) {
  readFile(argv.input, "utf8", function (err, f) {
    const inputFile = JSON.parse(f);
    const {from, to, color = "white"} = argv;
    findShortestPath({from, to, color, config: inputFile})
  });
}
