const { rostersArr, sectionsArr } = require('../index');

/**
 * This function takes in the Section and Roster data, returns an object of the sections_id, course_name, and an array of Id's
 * @param {*} rostersArr 
 * @param {*} sectionsArr 
 * @returns [ {} ]
 */
const secAndStu = (rostersArr, sectionsArr) => {

  let secArr = []

  //Iterate through the SectionArr
  for (let i = 0; i < sectionsArr.length; i++) {
    const section = sectionsArr[i].section_id
    const course = sectionsArr[i].course_name
    const students = []

    if(section != undefined){
      //Iterate throught rosterArr
      for (let j = 0; j < rostersArr.length; j++) {
        //if match, push student_id to array
        if(section === rostersArr[j].section_id){
          students.push(rostersArr[j].student_id)
        }
      }
    
      let secObj = {
        section_id: section,
        course_name: course,
        student_ids: students,
      }
      
      secArr.push(secObj)
    }
  }

  return secArr

}

console.log(secAndStu(rostersArr, sectionsArr))