const fs = require('fs');
const { parse } = require('csv-parse');
const { delimiter } = require('path');

const arrToObj = (csvData) => {
  return csvData
    .map((csvLine, csvIndex) => {
      if (csvIndex === 0 || !csvLine.length) return null; // skip header and empty lines
      return csvLine.reduce((a, v, i) => ({ ...a, [csvData[0][i]]: v }), {});
    })
    .filter((filter) => !!filter); //filter empty lines
};


// Convert Csv to Arr
const csvToArr = (file) =>{
  //Create an Array from the CSV file
  let data = fs.readFileSync(file)
  .toString()
  .split('\n')
  .map(e => e.trim()) // trim any white space
  .map(e => e.split(',').map(e => e.trim())); // convert each line into an array and trim whitespace

  return data;
}

module.exports = { arrToObj, csvToArr};