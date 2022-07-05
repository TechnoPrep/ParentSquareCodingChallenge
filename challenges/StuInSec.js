// const { chooseClassName } = require('../index.cjs');
const { studentsArr, rostersArr, sectionsArr } = require('../index');
const inquirer = require('inquirer');


/**
 * This function takes in an array of sections, creates a list of unique course_names, orders it, and removes any undefined
 * @param {*} sectionsArr 
 * @returns 
 */
const sectionArrBuilder = async (sectionsArr) =>{

  let secList = []

  sectionsArr.map((sec) => {
    if(!(secList.includes(sec.course_name))){
      secList.push(sec.course_name)
    }
  })

  return secList.sort().filter(x => x !== undefined)

}

/**
 * This function takes in an array of unique course_name, sorted, and prompts the user with a choice of all section names ot choose from.
 * @param {*} secArr 
 * @returns 
 */
const chooseClassName = async (secArr) => {

  let courseNames = await sectionArrBuilder(secArr);

  const choice = await inquirer.prompt([
      {
        type: 'list',
        message: 'Choose the class to search by',
        name: 'course_name',
        choices: courseNames,
        loop: false,
      },
  ])

  return choice.course_name

}

/**
 * This function creates an array of Objects for students who are enrolled in a classname
 * @param {*} secArr 
 * @param {*} rosterArr 
 * @param {*} stuArr
 * @param {*} classname
 * @returns [ {} ]
 */
const stuInSec = async (secArr, rosterArr, stuArr) => {

  const classname = await chooseClassName(secArr);

  // Returns a list of sections that match the Classname provided
  let secList = secArr.filter((sec) => {
    if(sec.course_name === classname){
      return sec.section_id
    }
  })

  // Returns Student Array
  let results = stuArr.filter((stu) =>{
    // Iterates through the rosterArr
    return rosterArr.some((ros) => {
      // If student_id matches in student and roster file
      if(stu.student_id === ros.student_id){
        // Iterates through the secList array
        return secList.some((sec) =>{
          // If section_id is included in the secList, return student
          return sec.section_id === ros.section_id
        })
      }
    })
  }).map((stu) =>{
    // Return in formatted Obj
    return {
      student_id: stu.student_id,
      first_name: stu.FirstName,
      last_name: stu.LastName
    }
  })

  console.log(results);
}

stuInSec(sectionsArr, rostersArr, studentsArr)
