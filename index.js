// Import Functions
const { arrToObj, csvToArr } = require('./challenges/CsvToObj.js');

// Input File Locations
const parentsCSV = __dirname + '/data/parents.csv';
const studentsCSV = __dirname + '/data/students.csv';
const staffCSV = __dirname + '/data/staff.csv';
const rostersCSV = __dirname + '/data/rosters.csv';
const sectionsCSV = __dirname + '/data/sections.csv';
const languageCSV = __dirname + '/data/language_codes.csv';

//Create Arrays and Objects
const parentsArr = arrToObj(csvToArr(parentsCSV));
const studentsArr = arrToObj(csvToArr(studentsCSV));
const staffArr = arrToObj(csvToArr(staffCSV));
const rostersArr = arrToObj(csvToArr(rostersCSV));
const sectionsArr = arrToObj(csvToArr(sectionsCSV));
const langArr = arrToObj(csvToArr(languageCSV));

module.exports = { parentsArr, studentsArr, staffArr, rostersArr, sectionsArr, langArr };