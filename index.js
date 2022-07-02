// Import Functions
const { arrToObj, csvToArr } = require('./helpers/CsvToObj');
const { countLangs, pickHighest } = require('./helpers/TopLangs');
const { stuNoCell } = require('./helpers/StuNoCell');
const { getSectionIds, getStuBySec } = require('./helpers/StuInSec');
const { missingParentContact } = require('./helpers/MissingParents');


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

// Out put Top n languages of Parents
// console.log(pickHighest(countLangs(parentsArr),3));

// Output students with no CellNumber
// console.log(stuNoCell(studentsArr));

// Output Student in Section
// console.log(getStuBySec(getSectionIds(sectionsArr, 'Physics 9'), rostersArr, studentsArr));

// Output Students with Missing Parents or Parents with no Contact Details
// console.log(missingParentContact(studentsArr, parentsArr));

// Output Sections with no Students Enrolled
// console.log(secNoStu(sectionsArr, rostersArr));

// Out Section, Course Name, and Array of Enrolled Students
//console.log(secAndStu(rostersArr, sectionsArr))

// Output a list of Staff who are listed in the Section File
//console.log(staffToSec(staffArr, sectionsArr));

// Output a list of language / code pairs from the parent.csv
//console.log(langToISOCode(langArr, parentsArr));




