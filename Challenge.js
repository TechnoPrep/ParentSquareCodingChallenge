// Import Functions
const { arrToObj, csvToArr } = require('./helpers/CsvToObj');
const { countLangs, pickHighest } = require('./helpers/TopLangs');
const { stuNoCell } = require('./helpers/StuNoCell');


// Input File Locations
const parentsCSV = __dirname + '/data/parents.csv';
const studentsCSV = __dirname + '/data/students.csv';
const staffCSV = __dirname + '/data/staff.csv';
const rostersCSV = __dirname + '/data/rosters.csv';
const sectionsCSV = __dirname + '/data/sections.csv';

//Create Arrays and Objects
const parentsArr = arrToObj(csvToArr(parentsCSV));
const studentsArr = arrToObj(csvToArr(studentsCSV));
const staffArr = arrToObj(csvToArr(staffCSV));
const rostersArr = arrToObj(csvToArr(rostersCSV));
const sectionsArr = arrToObj(csvToArr(sectionsCSV));

// Out put Top n languages of Parents
console.log(pickHighest(countLangs(parentsArr),3));

// Output students with no CellNumber
console.log(stuNoCell(studentsArr));






