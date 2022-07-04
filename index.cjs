// Import Functions
const inquirer = require("inquirer");
const { arrToObj, csvToArr } = require('./challenges/CsvToObj.cjs');
const { countLangs, pickHighest } = require('./challenges/TopLangs.cjs');
const { stuNoCell } = require('./challenges/StuNoCell.cjs');
const { stuInSec } = require('./challenges/StuInSec.cjs');
const { missingParentContact } = require('./challenges/MissingParents.cjs');
const { staffToSec } = require('./challenges/StaffToSec.cjs');
const { secNoStu } = require('./challenges/SectionMissingEnrollment.cjs');
const { secAndStu } = require('./challenges/SectionAndStudents.cjs');
const { langToISOCode } = require('./challenges/parentISO.cjs');
const { listOfUnqiueNumbers } = require('./challenges/NumberInFiles.cjs')

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

// Create Array for choosing sections
const sectionChoices = (sections) => {

  let sectionSelectArr = []

  sections.map((sec) => {
    if(!sectionSelectArr.includes(sec.course_name)){
      sectionSelectArr.push(sec.course_name);
    }
  })

  return sectionSelectArr.filter(x => x !== undefined).sort((a, b) => a.localeCompare(b));
}

const chooseClassName = () => {

  const classNamesArr = sectionChoices(sectionsArr);

  const className = inquirer.prompt([
    {
      type: "list",
      name: "course_name",
      message: "What section to you want to search?",
      choices: classNamesArr,
      loop: false,
    }
   ]);

  return className

}

const chooseChallenge = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'challenge',
      message: 'What challenge would you like to run?',
      choices: ['Challenge 1: Return Top 3 Languages', 
                'Challenge 2: Students with no number', 
                'Challenge 3: Students in Section',
                'Challenge 4: Students with Missing Guardian Data',
                'Challenge 5: Sections with no Enrollments',
                'Challenge 6: List of Sections and Enrolled Students',
                'Challenge 7: Staff members associated with Sections', 
                'Bonus Challenge 1: Language to ISO Code', 
                'Bonus Challenge 2: Duplicated Numbers'
               ],
      loop: false,
    },
  ])
  .then((data) => {

    const { challenge } = data;
    //   Switch case
    switch (challenge) {
        case 'Challenge 1: Return Top 3 Languages':
          console.log(pickHighest(countLangs(parentsArr),3));
          break;
        case 'Challenge 2: Students with no number':
          console.log(stuNoCell(studentsArr));
          break;
        case 'Challenge 3: Students in Section':
          console.log(stuInSec(sectionsArr, rostersArr, studentsArr));
          break;
        case 'Challenge 4: Students with Missing Guardian Data':
          console.log(missingParentContact(studentsArr, parentsArr));
          break;
        case 'Challenge 5: Sections with no Enrollments':
          console.log(secNoStu(sectionsArr, rostersArr));
          break;
        case 'Challenge 6: List of Sections and Enrolled Students':
          console.log(secAndStu(rostersArr, sectionsArr))
          break;
        case 'Challenge 7: Staff members associated with Sections':
          console.log(staffToSec(staffArr, sectionsArr));
          break;
        case 'Bonus Challenge 1: Language to ISO Code':
          console.log(langToISOCode(langArr, parentsArr));
          break;
        case 'Bonus Challenge 2: Duplicated Numbers':
          console.log(listOfUnqiueNumbers(studentsArr, parentsArr, staffArr));
          break;   
    
        default:
            break;
      }
  })

  .then(()=> {
    chooseChallenge();
}) 
}

chooseChallenge();


module.exports = { chooseClassName }




