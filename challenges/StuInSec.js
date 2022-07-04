const {studentsArr, rostersArr, sectionsArr } = require('../index');

/**
 * This function creates an array of Objects for students who are enrolled in a classname
 * @param {*} secArr 
 * @param {*} rosterArr 
 * @param {*} stuArr
 * @param {*} classname
 * @returns [ {} ]
 */
const stuInSec = (secArr, rosterArr, stuArr, classname) => {

  // Returns a list of sections that match the Classname provided
  let secList = secArr.filter((sec) => {
    if(sec.course_name === classname){
      return sec.section_id
    }
  })

  // Returns Student Array
  return stuArr.filter((stu) =>{
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
}

console.log(stuInSec(sectionsArr, rostersArr, studentsArr, 'Physics 9'))