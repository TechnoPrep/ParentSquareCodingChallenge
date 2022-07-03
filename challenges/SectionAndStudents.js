const { rostersArr, sectionsArr } = require('../index');

/**
 * This function takes in the Section and Roster data, returns an object of the sections_id, course_name, and an array of Id's
 * @param {*} rostersArr 
 * @param {*} sectionsArr 
 * @returns [ {} ]
 */
const secAndStu = (rostersArr, sectionsArr) => {

  rostersArr.map((ros) => {
    sectionsArr.map((sec) => {
      //check if ros and section_id match
      if(ros.section_id === sec.section_id){
        //If matched, check if the obj had the students property
        if(!sec.hasOwnProperty('students')){
          //If not, create the property
          sec.students = []
        }
        //push student to students array in section obj
        sec.students.push(ros.student_id) 
      }
    })
  })

  // Filter out any sections with a section_id, and only return required properties
  return sectionsArr.filter((sec) =>{
    if(sec.hasOwnProperty('section_id')){
      return sec
    }
  }).map((sec)=>{
    return{
      section_id: sec.section_id,
      course_name: sec.course_name,
      students: sec.students
    }
  })

}

console.log(secAndStu(rostersArr, sectionsArr))