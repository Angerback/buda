import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs";
import { findShortestPathNodeList } from "./pathFinder/pathFinder.js";
import { listToArrowString } from "./utils/formatters.js";
const argv = yargs(hideBin(process.argv)).argv;

if (argv.input && argv.from && argv.to) {
  readFile(argv.input, "utf8", function (err, file) {
    if (err) {
      console.log(err)
      return
    }
    const {from, to, color = "white"} = argv;
    const inputFileParsed = JSON.parse(file);
    const nodeList = findShortestPathNodeList({from, to, color, metroConfiguration: inputFileParsed})
    console.log(listToArrowString(nodeList))
  });
} else {
  console.log("Please provide parameters 'input', 'from' and 'to'")
}
