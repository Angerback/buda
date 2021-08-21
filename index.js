import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs";
import { findShortestPathNodeList } from "./pathFinder/index.js";
const argv = yargs(hideBin(process.argv)).argv;

if (argv.input && argv.from && argv.to) {
  readFile(argv.input, "utf8", function (err, file) {
    if (err) {
      console.log(err)
      return
    }
    const {from, to, color = "white"} = argv;
    const inputFileParsed = JSON.parse(file);
    const nodeList = findShortestPathNodeList({from, to, color, pathsConfiguration: inputFileParsed})
    console.log(nodeList.reduce((acc, current) => acc + "->" + current))
  });
} else {
  console.log("Please provide 'input', 'from' and 'to'")
}
